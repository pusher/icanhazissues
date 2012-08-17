var ALL_LABELS = ['priority', 'ready','done','review','release', 'development']
var DECORATIVE_LABELS;
var columnSet;
var issueHash = {};
$().ready(function(){
  DECORATIVE_LABELS = initLabels(labels, ALL_LABELS);
  addStateToIssues(issues, ALL_LABELS)
  initIssueHash(issues)
  var states = [
    { state: 'ready', width: '20%' },
    { state: 'development', width: '20%' },
    { state: 'review', width: '20%' },
    { state: 'release', width: '20%' },
    { state: 'done', width: '20%' }
  ]
  columnSet = new ColumnSet(states)
  columnSet.addIssues(allIssues());
  
  $('#controlBoard').html( new LabelBarView().html )
  allowPopup();
})
