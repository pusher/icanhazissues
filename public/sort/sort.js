var Issue = function(issue){
  this.template = $('#issue').clone();
  this.template.attr('id', null);
  this.template.find('h4').text(issue.title)
  this.template.css('-webkit-transform', 'rotate('+(-5 + Math.random() * 10) +'deg)')
  this.template.css('transform', 'rotate('+(-5 + Math.random() * 10) +'deg)')
  this.template.attr('id', issue.id)
  
  if( localStorage[issue.id] ) {
    var c = JSON.parse( localStorage[issue.id] )
    this.template.css('left', c.x)
    this.template.css('top', c.y)
  }
  
  for (var i=0; i < issue.labels.length; i++) {
    if (issue.labels[i].name == 'Bug'){
      this.template.addClass('bug')
    }
    if (issue.labels[i].name == 'Blocked'){
      this.template.addClass('blocked')
    }
    this.template.find('.labels').append( '<span class="label">'+issue.labels[i].name +'</span>');
  };
}

var draggable;
$().ready(function(){

  $('.desktop').empty();
  
  // $('.column').css('width', ($('body').width() / phases.length) + 'px')
  // $(window).resize(function(){
  //   $('.column').css('width', ($('body').width() / phases.length) + 'px')
  // })
  
  var dragging = false

  $(document).mouseup(function(evt){
    dragging = false
    var c = {};
    c.x =  evt.clientX - draggable.width() /2
    c.y =  evt.clientY - draggable.height() /2
    localStorage[draggable.attr('id')] = JSON.stringify(c)
  })
  
  $(document).mousemove(function(evt){
    if (dragging){
      draggable.css('left', evt.clientX - draggable.width() /2)
      draggable.css('top', evt.clientY - draggable.height() /2)
      return false
    }
  })
  
  for (var i=0; i < issues.length; i++) {
    var issue = new Issue( issues[i] )
    issue.template.mousedown(function(){
      dragging = true
      draggable = $(this)
      return false
    })
    
    $('.desktop').append( issue.template );
  };
})
