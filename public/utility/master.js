var Handler = function(){
  this.events = {};
}
Handler.prototype.on = function(event, callback){
  this.events[event] = callback
}
Handler.prototype.emit = function(event, data){
  this.events[event](data)
}

function initIssues(issues, includeLabels, excludeLabels, includeBlank){
  var newIssues = []
  issues.forEach(function(issueData){
    issueData.state = getLabel(issueData, includeLabels.concat(excludeLabels) )
    if (
      (issueData.state == '' && includeBlank) ||
      (_.include(includeLabels, issueData.state))
    ){
      newIssues.push(issueData)
      issueHash[issueData.id] = issueData;
    }
  })
  return newIssues;
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
  return '';
}

function hasLabel(issue, label){
  return (_.detect(issue.labels, function(a) { return a.name == label }) != null )
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

function allIssues(removeBlank){
  return issues;
}
