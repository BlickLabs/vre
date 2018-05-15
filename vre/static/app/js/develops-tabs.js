(function() {

  var btnTabs = $('.vre-btntabs-develop');
  var allDevelops = $('.vre-develop-todos');

  btnTabs.on('click', function(evt) {
    var developSection = evt.currentTarget.name;
    var currentSection = '';

    if (developSection == "todos" || developSection == "preventa" || developSection == "inmediata" || developSection == "vendido") {
      currentSection = allDevelops.filter('.vre-develop-' + developSection);
      $('.homepage-developments-items').html(currentSection);
    }
    
  });
})();