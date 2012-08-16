var EXCLUDED_LABELS = [
  'priority'
]
var INCLUDED_LABELS = ['ready', 'development', 'review', 'release', 'done']

var DECORATIVE_LABELS = []
var columns = {};

var issueHash = {};
$().ready(function(){
  labels.forEach(function(label){
    if (EXCLUDED_LABELS.concat(INCLUDED_LABELS).indexOf(label.name) == -1){
      DECORATIVE_LABELS.push(label)
    }
  })
  
  issues = initIssues(issues, INCLUDED_LABELS, EXCLUDED_LABELS, false)
  var states = [
    { state: 'ready', width: '20%' },
    { state: 'development', width: '20%' },
    { state: 'review', width: '20%' },
    { state: 'release', width: '20%' },
    { state: 'done', width: '20%' }
  ]
  states.forEach(function(state){
    var c = new ColumnView(state)
    columns[state.state] = c
    $('.columns').append(c.html)
  })
  addIssues(allIssues(true));
  
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
