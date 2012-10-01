var IssueView = function(issue){
  var self = this
  this.template = $('#issue').clone();
  this.template.attr('id', null);
  this.template.find('h4 a').text(issue.title)
  this.template.find('h4 a').attr('href',  issue.html_url)
  this.template.css('-webkit-transform', 'rotate('+(-3 + Math.random() * 6) +'deg)')
  this.template.attr('id', issue.id)
  this.template.data('number', issue.number);
  
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
  this.html.find('h3').text((phase.state == "") ? 'All' : phase.state)
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

var LabelBarView = function(){
  var self = this;
  this.html = $('#controlBoardTemplate').clone();
  this.html.attr('id', null)
  
  this.addLabel = function(label){
    var option = $('<option value="'+label.name+'">'+label.name+'</option>')
    self.html.find('#labelFilter').append(option)
    self.html.find('#labelBar').append( new LabelView(label).html )
  }
  
  var option = $('<option value="all">All</option>')
  this.html.find('#labelFilter').append(option)
  DECORATIVE_LABELS.forEach(function(label){
    self.addLabel(label)
  })
  this.html.find('#labelFilter').change(function(){
    columnSet.addIssues( filteredIssues( $(this).val() ) );
  });
  
  this.html.find('.showLabelFormBtn').click(function(){
    self.html.find('.newLabelForm').show();
    $(this).hide();
    return false;
  })
  this.html.find('.newLabelForm').hide()
  this.html.find('.newLabelForm').submit(function(){
    var form = this;
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      type: $(this).attr('method'),
      dataType: 'JSON',
      success: function(label){
        self.addLabel(label)
        $(form)[0].reset();
      },
      error: function(){
        alert('some sort of error has occurred.')
      }
    });
    return false;
  });
}

var LabelView = function(label){
  this.html = $('<a href="#" class="label" style="background: '+label.color+'">'+label.name+'</a>')
  this.html.data('label', label)
  this.html.draggable({
    helper: 'clone',
    containment: 'document',
    appendTo: 'body' 
  })
}


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