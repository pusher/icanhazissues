var ALL_LABELS = ['priority', 'ready','done','review','release', 'development']
var DECORATIVE_LABELS;
var columnSet;
var issueHash = {};
$().ready(function(){
  DECORATIVE_LABELS = initLabels(labels, ALL_LABELS);
  addStateToIssues(issues, ALL_LABELS);
  initIssueHash(issues)
  var states = [
    { state: '', width: '60%' },
    { state: 'priority', width: '20%' },
    { state: 'ready', width: '20%' }
  ]
  columnSet = new ColumnSet(states)
  columnSet.addIssues(allIssues());
  
  $('#controlBoard').html( new LabelBarView().html )
  allowPopup();
})
