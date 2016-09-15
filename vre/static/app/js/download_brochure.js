var addBrochureListener = (function () {
  'use strict';
  /*global djangoURLs, ga*/
  return function (gaEventName, developmentID) {
    $('#download-brochure-button').click(function (e) {
      e.preventDefault();
      var button = $(this);
      $.ajax({
        url: djangoURLs.suscribeToNewsletter,
        type : 'POST',
        data: $('#download-brochure-form').serialize(),
        beforeSend: function () {
          ga('send', 'event', gaEventName, 'ok');
          button.addClass('disabled');
        },
        complete: function () {
          button.removeClass('disabled');
          window.location.href = djangoURLs.downloadBrochure + developmentID;
        }
      });
    });
  };
}());