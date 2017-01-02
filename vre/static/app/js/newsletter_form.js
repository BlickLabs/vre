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
          $($(formElement).find('button')).attr('disabled', 'disabled');
        },
        success: function (data) {
          if (data.status === 'subscribed') {
            $('#newsletter-modal').removeClass('error').addClass('success');
            $('#newsletter-modal .modal-title').text('Nos pondremos en contacto contigo a la brevedad.');
            $('#newsletter-modal .modal-body').text('Ya estas suscrito a nuestro Newsletter.');
          } else {
            $('#newsletter-modal').removeClass('success').addClass('error');
            $('#newsletter-modal .modal-title').text('Ocurrió un error');
            $('#newsletter-modal .modal-body').html('Tu suscripción no pudo llevarse a cabo, intentalo mas tarde');
          }
        },
        error: function () {
          $('#newsletter-modal').removeClass('success').addClass('error');
          $('#newsletter-modal .modal-title').text('Ocurrió un error');
          $('#newsletter-modal .modal-body').text('Ocurrió un error inesperado y tu suscripción no pudo llevarse a cabo.');
        },
        complete: function () {
          $('#newsletter-modal').modal('show');
          $($(formElement).find('button')).removeAttr('disabled');
        }
      });
    };
  }
  $('#btn-newsletter').click(ajaxPOST('#footer-newsletter-form', 'NewsFoot'));
  $('#btn-newsletter-big').click(ajaxPOST('#homepage-special-form', 'NewsHead'));
}());