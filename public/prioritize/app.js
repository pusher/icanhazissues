var EXCLUDED_LABELS = [
  'done',
  'review',
  'release',
  'development'
]
var INCLUDED_LABELS = ['priority', 'ready']

var DECORATIVE_LABELS = []
var columns = {};

var issueHash = {};
$().ready(function(){
  labels.forEach(function(label){
    if (EXCLUDED_LABELS.concat(INCLUDED_LABELS).indexOf(label.name) == -1){
      DECORATIVE_LABELS.push(label)
    }
  })
  
  issues = initIssues(issues, INCLUDED_LABELS, EXCLUDED_LABELS, true)
  var states = [
    { state: '', width: '60%' },
    { state: 'priority', width: '20%' },
    { state: 'ready', width: '20%' }
  ]
  states.forEach(function(state){
    var c = new ColumnView(state)
    columns[state.state] = c
    $('.columns').append(c.html)
  })
  addIssues(allIssues());
  
  $('#controlBoard').html( new LabelBarView().html )
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
})
