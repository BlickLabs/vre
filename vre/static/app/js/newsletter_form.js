(function () {
  'use strict';
  /*global djangoURLs, ga*/
  function ajaxPOST(formElement, gaEventName) {
    return function () {
      $.ajax({
        url: djangoURLs.suscribeToNewsletter,
        type : 'POST',
        data: $(formElement).serialize(),
        beforeSend: function () {
          ga('send', 'event', gaEventName, 'ok');
        },
        success: function (data) {
          if (data.status === 'suscribed') {
            $('#newsletter-modal').removeClass('error').addClass('success');
            $('#newsletter-modal .modal-title').text('Suscripción realizada con éxito');
            $('#newsletter-modal .modal-body').text('Ya estas suscrito a nuestro Newsletter.');
          } else {
            $('#newsletter-modal').removeClass('success').addClass('error');
            $('#newsletter-modal .modal-title').text('Ocurrió un error');
            $('#newsletter-modal .modal-body').html('Tu suscripción no pudo llevarse a cabo debido al siguiente error: <br><span class="semibold">' + data.title + "</span>");
          }
        },
        error: function () {
          $('#newsletter-modal').removeClass('success').addClass('error');
          $('#newsletter-modal .modal-title').text('Ocurrió un error');
          $('#newsletter-modal .modal-body').text('Ocurrió un error inesperado y tu suscripción no pudo llevarse a cabo.');
        },
        complete: function () {
          $('#newsletter-modal').modal('show');
        }
      });
    };
  }
  $('#btn-newsletter').click(ajaxPOST('#footer-newsletter-form', 'NewsFoot'));
  $('#btn-newsletter-big').click(ajaxPOST('#homepage-special-form', 'NewsHead'));
}());