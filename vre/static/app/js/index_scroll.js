(function() {

  var exp360 = window.location.hash;
  var navBarHeight = 63;
  
  if (exp360 === '#experiencia360') {
    $('html, body').animate({
      scrollTop: $("#experiencia360").offset().top - navBarHeight;
    }, 'slow');
  }

})();
