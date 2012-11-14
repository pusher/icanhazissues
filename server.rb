# encoding: utf-8

class App < Sinatra::Base
  enable :sessions
  set :public_folder, File.join(File.dirname(__FILE__), 'public')

  set :github_options, GITHUB_CREDS

  register Sinatra::Auth::Github

  helpers do

    def fetch_issues
      response = github_raw_request(:get, "repos/#{OWNER}/#{REPO}/issues", nil, { :per_page => 100 })
      pag(response)
    end
    
    def pag(response)
      new_issues = MultiJson.load(response)
      if new_issues.length == 100
        next_link = response.headers[:link].gsub(/^\<([^>]+)\>.*$/, "\\1")
        new_issues + pag(RestClient.get(next_link))
      else
        new_issues
      end
    end
    
    def remove_old_labels(issue)
      old_labels = []
      issue['labels'].each do |label|
        if App::COLUMNS.include?(label['name']) 
          old_labels << label
          path = "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/labels/#{label['name']}"
          github_raw_request(:delete, path, nil)
        end
      end
      old_labels
    end

    def add_label(issue_num, label)
      path = "repos/#{OWNER}/#{REPO}/issues/#{issue_num}/labels"
      github_raw_request(:post, path, MultiJson.dump([label]))
    end    

    def github_raw_request(verb, path, body = nil, params={})
      url = "https://api.github.com/#{path}"
      params = {:access_token => github_user.token}.merge(params)
      case verb
      when :get, :delete, :head
        RestClient.send(verb, url, :params => params, :accept => :json)
      else
        RestClient.send(verb, url, body, :params => params, :accept => :json)
      end
    end

    def github_request(verb, path, params={})
      MultiJson.load(github_raw_request(verb, path, nil, params))
    end
  end

  get '/' do
    authenticate!
    redirect '/board'
  end

  get '/issues.js' do
    issues = fetch_issues
    content_type "application/javascript"
    return "var issues = #{MultiJson.dump(issues)}"
  end
  
  get '/milestones.js' do
    milestones = github_request(:get, "repos/#{OWNER}/#{REPO}/milestones")
    content_type "application/javascript"
    return "var milestones = #{MultiJson.dump(milestones)}"
  end

  get '/board' do
    authenticate!
    erb :board
  end
  
  get '/labels.js' do
    labels = github_request(:get, "repos/#{OWNER}/#{REPO}/labels", { :per_page => 100 })
    content_type "application/javascript"
    return "var labels = #{MultiJson.dump(labels)}"
  end

  get '/done.txt' do
    authenticate!
    @issues = github_request(:get, "repos/#{OWNER}/#{REPO}/issues", {
      :state => "open",
      :labels => "done"
    })

    report = "#{@issues.size} stories done.\n\n"

    @issues.map do |issue|
      # Extract labels into [String]
      labels = issue["labels"].map { |l| l["name"] }.sort - ["done"]
      [issue, labels]
    end.group_by do |issue, labels, milestone|
      # Group by milestone name, or operations
      if (ms = issue["milestone"])
        [ms["title"], ms]
      elsif labels.include?('ops')
        ['Operations', nil]
      else
        ['Other tech', nil]
      end
    end.sort_by do |(milestone_title, milestone), _|
      # Show oldest milestones first
      milestone ? milestone["created_at"] : "Z#{milestone_title}"
    end.each do |(milestone_title, milestone), issue_labels|
      heading = "MILESTONE: #{milestone_title} (#{issue_labels.size})"
      report << "<h3>#{heading}</h3>"
      report << '=' * heading.size + "\n\n"

      issue_labels.each do |issue, labels|
        report << "#{issue["number"]}: #{issue["title"]}\n"
        report << "⬠ #{labels.join(' ⬠ ')}\n"
        report << "https://github.com/pusher/pusher-server/issues/#{issue['number']}\n"
        report << "★ #{issue['assignee']['login']} ★\n" if issue['assignee']
        report << "\n"
      end
    end

    return '<pre>' + report + '</pre>'
  end

  post '/issues' do
    authenticate!
    puts params['issue']
    path = "repos/#{OWNER}/#{REPO}/issues"
    return github_raw_request(:post, path, MultiJson.dump(params['issue']) )
  end

  post '/set_phase/:num' do
    authenticate!
    issue = github_request(:get, "repos/#{OWNER}/#{REPO}/issues/#{params['num']}")
    old_labels = remove_old_labels(issue)
    if params['label'] != ""
      add_label(params['num'], params['label'])
    end
    original_state = old_labels.empty? ? 'backlog' : old_labels.collect{|c| c['name']}.join(', ')
    comment = { :body => "#{github_user.login} changed state: #{original_state} -> #{params['label']}" }
    github_raw_request(:post, "repos/#{OWNER}/#{REPO}/issues/#{params['num']}/comments", MultiJson.dump(comment))
    return 'success'
  end

  post '/add_label/:num' do
    authenticate!
    add_label(params['num'], params['label'])
    return 'success'
  end

  post '/labels' do
    authenticate!
    params['label']['color'].gsub!(/^#/, '')
    return github_raw_request(:post, "repos/#{OWNER}/#{REPO}/labels", MultiJson.dump(params['label']))
  end

  get '/logout' do
    logout!
    redirect 'https://github.com'
  end
end