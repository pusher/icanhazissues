var Column = function(phaseName, i){
  this.template = $('#column').clone();
  this.template.attr('id', null);
  this.template.find('h3').text(phaseName)
  this.template.find('.area').attr('id', phaseName)
  if (i % 2 == 0)
    this.template.addClass('odd')
}

var Issue = function(issue){
  this.template = $('#issue').clone();
  this.template.attr('id', null);
  this.template.find('h4').text(issue.title)
  this.template.css('-webkit-transform', 'rotate('+(-5 + Math.random() * 10) +'deg)')
  
  
  for (var i=0; i < issue.labels.length; i++) {
    if (issue.labels[i].name == 'Bug'){
      this.template.addClass('bug')
    }
    if (issue.labels[i].name == 'Blocked'){
      this.template.addClass('blocked')
    }
    this.template.find('.labels').append( '<span class="label">'+issue.labels[i].name +'</span>');
  };
  
  if (issue.assignee){
    console.log(issue.assignee)
    var avatar = $('<div class="avatar"><img src="'+issue.assignee.avatar_url+'" ></img>')
    avatar.css('-webkit-transform', 'rotate('+(-10 + Math.random() * 20) +'deg)')
    this.template.append(avatar)
  }
}

$().ready(function(){
  var phases = [
    'ready',
    'Development',
    'staging',
    'review',
    'release',
    'done'
  ]
  $('.columns').empty();
  for (var i=0; i < phases.length; i++) {
    $('.columns').append( new Column(phases[i], i).template );
  };

  $('.column').css('width', ($('body').width() / phases.length) + 'px')
  $(window).resize(function(){
    $('.column').css('width', ($('body').width() / phases.length) + 'px')
  })
  for (var i=0; i < issues.length; i++) {
    if ( issues[i].milestone != null) {
       
      if (_.detect(issues[i].labels, function(a) { return a.name == 'Development' }) != null ){
        $('#Development').append( new Issue( issues[i] ).template );
      } else if (_.detect(issues[i].labels, function(a) { return a.name == 'Pending Release' }) != null ){
        $('#release').append( new Issue( issues[i] ).template );
      } else if (_.detect(issues[i].labels, function(a) { return a.name == 'Done' }) != null ){
        $('#done').append( new Issue( issues[i] ).template );
      } else {
          $('#ready').append( new Issue( issues[i] ).template );
      };
    }
  };
})