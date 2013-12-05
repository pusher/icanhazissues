function colourFromStaleness(date){
  var date = new Date(date)
  var now = new Date() 
  var diff = now - date
  var day = 24*60*60*1000
  var startOfYesterday = now - (now % day) - day

  if (date > startOfYesterday){
    return '#83FF5F' // green
  } else if (diff < 7 * day){
    return '#DBFF5F' // yellow
  } else if (diff < 14 * day){
    return '#FFAE6A' // orange
  } else {
    return '#FF6B77' // red
  }
}

var IssueView = function(issue){
  var self = this
  this.template = $('#issue').clone();
  this.template.attr('id', null);
  this.template.find('h4 a').text(issue.title)
  this.template.find('h4 a').attr('href',  issue.html_url)
  this.template.find('h4 a').attr('target',  '_blank')
  this.template.css('-webkit-transform', 'rotate('+(-0.5 + Math.random() * 3) +'deg)')
  this.template.attr('id', issue.id)
  this.template.data('number', issue.number);
  this.template.css('background', colourFromStaleness(issue.updated_at));

  issue.labels.forEach(function(label){
    if (label.name == 'blocked')
      self.template.css({
        'background-image': 'url(/images/sad.png)',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
      });
  })

  if (ISSUECSS)
    this.template.css(ISSUECSS)
    
  issue.labels.forEach(function(label){
    if (_.detect(DECORATIVE_LABELS, function(dl){ return dl.name == label.name }) != null){
      self.template.addClass(label)
      self.template.find('.labels').append(new StickerView(label).html)
    }
  })
  
  this.template.draggable({
    scroll: false,
    zIndex: 10000,
    revert: 'invalid',
    helper: 'clone',
    start: function(evt, ui){
      $(this).css('opacity', 0);
      $(ui.helper).addClass('dragging')
    },
    stop: function(evt, ui){
      $(this).css('opacity', 1)
    }
  });  
  
  this.template.droppable({
    accept: '.label',
    drop: function(event, ui){
      var label = $(ui.draggable).data('label')
      addLabel(issue.number, label);
      self.template.find('.labels').append(new StickerView(label).html)
    }
  })
  this.template.handler = new Handler()
  
  if (issue.assignee){
    var avatar = $('<div class="avatar"><img src="'+issue.assignee.avatar_url+'" ></img>')

    var rotate = 'rotate('+(-10 + Math.random() * 20) +'deg)'
    avatar.css('-webkit-transform', rotate)
    avatar.css('-moz-transform', rotate)

    this.template.append(avatar)
  }
}

var StickerView = function(label){
  this.html = $('<a href="#" class="sticker" style="background:'+label.color+'"></a>')
  this.html.css('-webkit-transform', 'rotate('+(-5 + Math.random() * 10) +'deg)')
}

var ColumnView = function(phase){
  ColumnView.incrementor++;
  this.phase = phase.state;
  this.html = $('#columnTemplate').clone();
  this.html.attr('id', null);
  this.html.css('width', phase.width);
  this.html.addClass(phase.state)
  this.html.addClass( ( ColumnView.incrementor % 2 == 0) ? 'odd' : 'even' )
  this.html.data('phase', phase.state)
  
  this.html.droppable({
    accept: function(el){
      if (!$(el).hasClass('issue'))
        return false
      var id = $(el).attr('id');
      var issue = issueHash[id];
      return ( $(this).data('phase') != issue.state )
    },
    drop: function( event, ui ) {
      var phase = $(this).data('phase')
      var id = $(ui.draggable).attr('id')
      var issue = issueHash[id];
      $(this).removeClass('over')
      setPhase(issue.number, phase, function(){
        
      })
      issue.state = phase
  		$(ui.draggable).css({ left: 0, top: 0})
  		$(this).find('.drop').append( $(ui.draggable) )
  	},
  	over: function(event, ui) { 
      $(this).addClass('over')
  	},
  	out: function(event, ui) { 
      $(this).removeClass('over')
  	}
  })
}
ColumnView.prototype.addIssue = function(issue){
  this.html.find('.drop').append(issue.template)
}
ColumnView.incrementor = 0


var IssueFormView = function(){
  var self = this;
  this.html = $('#issueFormTemplate').clone();
  this.html.attr('id', null);
  
  this.html.find('.issueForm').submit(function(){
    var form = this;
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      type: $(this).attr('method'),
      dataType: 'JSON',
      success: function(issue){
        self.html.remove();
        issue.state = '';
        columnSet.addIssue(issue);
      }
    });
    return false;
  });
}