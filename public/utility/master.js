var Handler = function(){
  this.events = {};
}
Handler.prototype.on = function(event, callback){
  this.events[event] = callback
}
Handler.prototype.emit = function(event, data){
  this.events[event](data)
}

function initIssues(options){
  issues.forEach(function(issueData){
    if (hasNoLabel(issueData)){
      issueData.state = ''
    } else {
      issueData.state = getLabel(issueData, options)
    }
    issueHash[issueData.id] = issueData;
  })
}

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

var addLabel = function(id, label, callback){
  $.ajax({
    url: '/add_label/'+id,
    type: 'POST',
    data: {label: label.name},
    error: function(data){
      alert('error')
    },
    success: callback
  })
}

function getLabel(issue, potentialLabels){
  for (var i=0; i < potentialLabels.length; i++) {
    if ( hasLabel(issue, potentialLabels[i]) ){
      return potentialLabels[i]
    }
  };
}

function hasLabel(issue, label){
  return (_.detect(issue.labels, function(a) { return a.name == label }) != null )
}

function hasNoLabel(issue){
  return (issue.labels.length < 1 || doesntHaveLabel(issue, ['ready', 'priority']))
}

function doesntHaveLabel(issue, excludeLabels){
  var labels =  _.map(issue.labels, function(l){ return l.name }) ;
  return (_.intersection(excludeLabels, labels).length < 1 )
}

function addIssues(issues){
  $('.drop').empty();  
  issues.forEach(function(issueData){
    var issue = new IssueView( issueData )
    columns[issueData.state].addIssue( issue );
  })
}

function filteredIssues(filter){
  if (filter && filter != 'all' ){
    return _.filter(allIssues(), function(issue){
      return hasLabel(issue, filter)
    })
  } else {
    return allIssues();
  }
}

function allIssues(){
  return _.filter(issues, function(issue){ 
    var labels =  _.map(issue.labels, function(l){ return l.name }) ;
    return (_.intersection(EXCLUDED_LABELS, labels).length < 1 )
  });
}
