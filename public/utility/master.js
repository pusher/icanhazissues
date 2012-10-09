var Handler = function(){
  this.events = {};
}
Handler.prototype.on = function(event, callback){
  this.events[event] = callback
}
Handler.prototype.emit = function(event, data){
  this.events[event](data)
}

var ColumnSet = function(states, issues, parent, laneName, height){
  this._columns = {}
  var self = this;
    
  if (!laneName) {
    this._el = parent
  } else {
    this._el = $('<div class="swimlane"></div>')
    this._el.height(height)
    parent.append(this._el)
  }
  
  states.forEach(function(state){
    var c = new ColumnView(state)
    self._columns[state.state] = c
    self._el.append(c.html)
  })
  
  this.addIssues(issues)
}
ColumnSet.prototype.addIssue = function(issue){
  if (this._columns[issue.state])
    this._columns[issue.state].addIssue( new IssueView( issue ) );
}

ColumnSet.prototype.addIssues = function(issues){
  this._el.find('.drop').empty();  
  var self = this;
  issues.forEach(function(issueData){
    self.addIssue(issueData)
  })
};

function initLabels(labels, allLabels){
  return _.filter(labels, function(label){
    if (allLabels.indexOf(label.name) == -1){
      return label
    }
  })
}

function addStateToIssues(issues, allLabels){
  issues.forEach(function(issueData){
    issueData.state = getLabel(issueData, allLabels )
  })
}

function initIssueHash(issues){
  issues.forEach(function(issue){
    issueHash[issue.id] = issue;
  })
}

function initBoard(states, issues, swimlanes){
  $('.columns').empty();
  $('.titles').empty();
  DECORATIVE_LABELS = initLabels(labels, ALL_LABELS);
  addStateToIssues(issues, ALL_LABELS)
  issues = _.filter(issues, function(issue){
    return (_.detect(states, function(state){
      return state.state == issue.state
    }) != null);
  })
  initIssueHash(issues)
  states.forEach(function(state){
    var title = $('<h3>'+state.state+'</h3>')
    title.width(state.width)
    title.css('float', 'left')
    $('.titles').append(title)
  })
  $('.columns').height(window.innerHeight - $('.titles').height() - $('#controlBoard').height())
  var heights = {
    'ops': '25%',
    'transport': '25%',
    'all': '50%'
  }
  if (swimlanes){
    // var height = (100 / (swimlanes.length + 1))
    var usedIssues = []
    swimlanes.forEach(function(label){
      var sIssues = filteredIssues(label, issues)
      usedIssues = usedIssues.concat(sIssues)
      columnSet = new ColumnSet(
        states, 
        sIssues, 
        $('.columns'),
        label, 
        heights[label]
      )
    })
    var rejectedIssues = _.filter(issues, function(issue){
      return (_.detect(usedIssues, function(uIssue){
        return uIssue.id == issue.id;
      }) == null);
    })
    new ColumnSet(
      states, 
      rejectedIssues, 
      $('.columns'),
      'all', 
      heights['all']
    )
  } else {
    columnSet = new ColumnSet(states, issues, $('.columns'))
  }
  $('#controlBoard').html( new LabelBarView().html )
  allowPopup();
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

function filteredIssues(filter, issues){
  if (filter && filter != 'all' ){
    return _.filter(issues, function(issue){
      return hasLabel(issue, filter)
    })
  } else {
    return allIssues();
  }
}

function allIssues(removeBlank){
  return issues;
}

function allowPopup(){
  var popupForm = null
  $(document).keydown(function(evt){
    if (evt.keyCode == 78 && popupForm == null){
      popupForm = new IssueFormView()
      $('body').append(popupForm.html)
    }
    if (evt.keyCode == 27 && popupForm != null){
      popupForm.html.remove();
      popupForm = null
    }
  })
} 
