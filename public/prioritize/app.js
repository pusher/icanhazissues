var Handler = function(){
  this.events = {};
}
Handler.prototype.on = function(event, callback){
  this.events[event] = callback
}
Handler.prototype.emit = function(event, data){
  this.events[event](data)
}

var Issue = function(issue){
  this.template = $('#issue').clone();
  this.template.attr('id', null);
  this.template.find('h4 a').text(issue.title)
  this.template.find('h4 a').attr('href',  issue.html_url)
  this.template.css('-webkit-transform', 'rotate('+(-5 + Math.random() * 10) +'deg)')
  this.template.attr('id', issue.id)
  this.template.data('number', issue.number);
  
  for (var i=0; i < issue.labels.length; i++) {
    if (issue.labels[i].name == 'Bug'){
      this.template.addClass('bug')
    }
    if (issue.labels[i].name == 'Blocked'){
      this.template.addClass('blocked')
    }
  };
  
  this.template.draggable({
    containment: 'document',
    scroll: false,
    zIndex: 10000,
    revert: 'invalid',
    helper: 'clone',
    start: function(evt, ui){
      $(this).css('opacity', 0)
    },
    stop: function(evt, ui){
      $(this).css('opacity', 1)
    }
  });  
  this.template.handler = new Handler()
}

var draggable;
$().ready(function(){
  
  redraw();
  
  $('.all').data('phase', '')
  $('.ready').data('phase', 'ready')
  $('.priority').data('phase', 'priority')
  
  $('.column').droppable({
    drop: function( event, ui ) {
      var phase = $(this).data('phase')
      var id = $(ui.draggable).attr('id')
      var number = $(ui.draggable).data('number')
      setPhase(number, phase, function(){
        $(this).removeClass('over')
      })
  		issues = _.reject(issues, function(issue){ return issue.id == id; });
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
  
  $('.drop').scroll(function(event){
    event.stopPropagation();
    return false;
  })
})

var setPhase = function(id, phase, callback){
  $.ajax({
    url: '/set_phase/'+id,
    type: 'POST',
    data: {label: phase},
    error: function(data){
      alert('error')
    },
    success: callback
  })
}

function redraw(){
  
  issues.forEach(function(issueData){
    var issue = new Issue( issueData )
    if (_.detect(issueData.labels, function(a) { return a.name == 'priority' }) != null ){
      $('.priority .drop').append( issue.template );
    } else if (_.detect(issueData.labels, function(a) { return a.name == 'ready' }) != null ){
      $('.ready .drop').append( issue.template );
    } else {
      $('.all .drop').append( issue.template );
    }
  })

}