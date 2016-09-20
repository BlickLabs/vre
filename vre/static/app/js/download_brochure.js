var addBrochureListener = (function () {
  'use strict';
  /*global djangoURLs, ga*/
  return function (gaEventName, developmentID) {
    $('#download-brochure-button').click(function (e) {
      e.preventDefault();
      var button = $(this),
        span = $('#download-brochure-span');
      $.ajax({
        url: djangoURLs.suscribeToNewsletter,
        type : 'POST',
        data: $('#download-brochure-form').serialize(),
        beforeSend: function () {
          var isEmail = /^[\-a-z0-9~!$%\^&*_=+}{\'?]+(\.[\-a-z0-9~!$%\^&*_=+}{\'?]+)*@([a-z0-9_][\-a-z0-9_]*(\.[\-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
          if (isEmail.test($('#download-brochure-email').val())) {
            button.addClass('disabled');
            span.text('');
            span.css('margin-top', '0');
            ga('send', 'event', gaEventName, 'ok');
          } else {
            span.css('margin-top', '20px');
            span.text('Introduce una dirección de correo válida.');
            return false;
          }
        },
        complete: function () {
          button.removeClass('disabled');
          span.text('');
          window.location.href = djangoURLs.downloadBrochure + developmentID;
        }
      });
    });
  };
}());