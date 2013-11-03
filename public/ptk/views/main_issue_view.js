var MainIssueView = function(issue){
  var self = this;
  this.html = $('<div class="row">' +
'     <div class="col-md-12">'+
'       <img class="avatar" src="'+ issue['user']['avatar_url'] +'">'+
'       <h4><a href="'+ issue['html_url'] +'">'+ issue['title'] +' - '+ issue['number'] +'</a></h4>'+
'     </div>'+
'   </div>'+
'   '+
'   <div class="row">'+
'     <div class="col-md-1 deny-holder">'+
'     </div>'+

'     <div class="col-md-10 comment-cell">'+
'       <div class="comments">'+
'       </div>  '+
'     </div>'+
'     '+
'     <div class="col-md-1 accept-holder">'+
'     </div>'+
'     '+
'   </div>'+
'   '+
'   <hr/>')

  if (issue['body'] != ''){
    this.html.find('.comments').append(issue['body'])
  }
  
  var acceptBtn = $('<a href="#" class="shifter">&gt;</a>')
  acceptBtn.click(function(){
    self.html.remove()
    accept(issue)
  })
  this.html.find('.accept-holder').append(acceptBtn)

  var denyBtn = $('<a href="#" class="shifter">&lt;</a>')
  denyBtn.click(function(){
    self.html.remove()
    deny(issue)
  })
  this.html.find('.deny-holder').append(denyBtn)
}


//'         <% issue['comments'].each do |comment| +''+
//'           <img class="avatar" src="'+ comment['user']['avatar_url'] +'">'+
//'           <pre>'+ comment['body'] +'</pre>'+
//'         <% end +''+