var SideBarView = function(filters, labels, milestones){
  var self = this;
  this.html = $('#filterFormTemplate').clone();
  this.html.attr('id', null)
  
  this.html.find('.filterForm').append( new LabelFilterView(labels, filters).html )
  
  this.html.find('.filterForm').append( new CreatorFilterView(['maxthelion', 'mloughran', 'leggetter', 'cultureulterior', 'pl', 'dctanner', 'richcaudle', 'DanielWaterworth', 'sylg'], filters).html )
  
  this.html.find('.filterForm').append( new MilestoneFilterView(milestones, filters).html )
  
  
  this.html.find('.filterForm').append('<br><br><br>')
  this.html.append(new LabelBarView(labels).html.hide() )
  
}

var FilterView = function(){
  
}

var MilestoneFilterView = function(milestones, filters){
  var self = this;
  this.html = $('<div>')
  this.html.append('<h4>Milestones</h4>')
  
  milestones.forEach(function(milestone){
    self.html.append( new CheckBoxView('milestone', milestone.title, filters).html )
  })
}


var CreatorFilterView = function(creators, filters){
  var self = this;
  this.html = $('<div>')
  this.html.append('<h4>Created by</h4>')
  
  creators.forEach(function(creator){
    self.html.append( new CheckBoxView('creator', creator, filters).html )
  })
}

var LabelFilterView = function(labels, filters){
  var self = this;
  this.html = $('<div>')
  this.html.append('<h4>Labels</h4>')
  
  labels.forEach(function(label){
    self.html.append( new LabelCheckBoxView(label, filters).html )
  })
}

var LabelCheckBoxView = function(label, filters){
  this.html = $('<p>')
  this.html.append('<label for="labels_'+label.name+'">'+label.name+' </label>')
  var checkbox = $('<input type="checkbox" name="filters[labels][]" value="'+label.name+'">')
  if ( filters && filters.labels && _.detect(filters.labels, function(a) { return a == label.name }) != null )
    checkbox.attr('checked', 'checked')
  this.html.append(checkbox)
  
  checkbox.change(function(){
    davisRequestFromForm( $( $(this).context.form ) );
  })
}

var CheckBoxView = function(name, field, filters){
  this.html = $('<p>')
  this.html.append('<label for="labels_'+ field +'">'+ field +' </label>')
  var checkbox = $('<input type="checkbox" name="filters['+name+'][]" value="'+field+'">')
  if ( filters && filters[name] && _.detect(filters[name], function(a) { return a == field }) != null )
    checkbox.attr('checked', 'checked')
  this.html.append(checkbox)
  
  checkbox.change(function(){
    davisRequestFromForm( $( $(this).context.form ) );
  })
}


var LabelBarView = function(labels){
  var self = this;
  this.html = $('#controlBoardTemplate').clone();
  this.html.attr('id', null)
  
  this.addLabel = function(label){
    var option = $('<option value="'+label.name+'">'+label.name+'</option>')
    self.html.find('#labelBar').append( new LabelView(label).html )
  }
  
  var option = $('<option value="all">All</option>')
  this.html.find('#labelFilter').append(option)
  if (labels){
    labels.forEach(function(label){
      self.addLabel(label)
    })
  }
  
  this.html.find('.showLabelFormBtn').click(function(){
    self.html.find('.newLabelForm').show();
    $(this).hide();
    return false;
  })
  this.html.find('.newLabelForm').hide()
  this.html.find('.newLabelForm').submit(function(){
    var form = this;
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      type: $(this).attr('method'),
      dataType: 'JSON',
      success: function(label){
        self.addLabel(label)
        $(form)[0].reset();
      },
      error: function(){
        alert('some sort of error has occurred.')
      }
    });
    return false;
  });
}

var LabelView = function(label){
  this.html = $('<a href="#" class="label" style="background: '+label.color+'">'+label.name+'</a>')
  this.html.data('label', label)
  this.html.draggable({
    helper: 'clone',
    containment: 'document',
    appendTo: 'body' 
  })
}
