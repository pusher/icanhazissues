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
    this._el.append( $('<div class="htext">'+laneName+'</div>'))
    parent.append(this._el)
  }

  states.forEach(function(state){
    var c = new ColumnView(state)
    self._columns[state.state] = c
    self._el.append(c.html)
  })

  this._el.append($('<div style="clear: both"></div>'))

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

function resizeBoard(){
  var boardHeight = window.innerHeight - $('.titles').height()
  $('.columns').height(boardHeight)

  $('.swimlane').each(function(i, e) {
    var swimlane = $(e);
    var heights = swimlane.find('.drop').map(function(i, e) {return e.scrollHeight});
    heights.push(100);

    var newHeight = Math.max.apply(Math, heights);
    swimlane.find('.drop').height(newHeight);
  })
}

function initBoard(states, issues, milestones){
  $('.columns').empty();
  $('.titles').empty();
  DECORATIVE_LABELS = initLabels(labels, ALL_LABELS);
  addStateToIssues(issues, ALL_LABELS)
  // remove issues that aren't needed on the board
  issues = _.filter(issues, function(issue){
    return (_.detect(states, function(state){
      return state.state == issue.state
    }) != null);
  })
  // remove pull requests 
  issues = _.filter(issues, function(issue){
    return issue.pull_request == null || issue.pull_request.patch_url == null
  })
  initIssueHash(issues)
  states.forEach(function(state){
    var heading = (state.state == '') ? 'All' : state.state
    var title = $('<h3>'+heading+'</h3>')
    title.width(state.width)
    title.css('float', 'left')
    $('.titles').append(title)
  })
  var columnSets = [];
  var remainderColumnSets = [];
  if (milestones.length > 0){
    milestones.forEach(function(milestone){
      var sIssues = _.filter(issues, function(issue){
        return issue.milestone && issue.milestone.id == milestone.id
      })
      if (sIssues.length > 0){
        columnSets.push( 
          new ColumnSet(
            states, 
            sIssues, 
            $('.columns'),
            milestone.title, 
            "200px"
          )
        )
      }
    })
    var uncategorisedIssues = _.filter(issues, function(issue){
      return issue.milestone == null
    })
    remainderColumnSets.push(
      new ColumnSet(
        states,
        uncategorisedIssues,
        $('.columns'),
        'Uncategorised',
        "200px"
      )
    )
  } else {
    columnSets.push(new ColumnSet(states, issues, $('.columns')) )
  }
  resizeBoard()
  $(window).resize(function(){
    resizeBoard()
  })
  
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

var decodeUrl = function (str) {
  return decodeURIComponent(str.replace(/\+/g, '%20'))
};

var davisRequestFromForm = function(form){
  var params = {
     method: form.attr('method'),
     fullPath: decodeUrl(form.serialize() ? [form.prop('action'), form.serialize()].join("?") : form.prop('action')),
     title: form.attr('title'),
     delegateToServer: function () {
       // not sure in what circumstances this fires
       // form.submit()
     }
  };
  var request = new Davis.Request( params );
  Davis.location.assign(request)
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
