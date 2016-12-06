(function () {
  'use strict';
  /*global jQuery, moment */
  /*jslint sub:true*/

  jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio",
    remote: "Please fix this field",
    email: "Ingresa una dirección de correo válida",
    url: "Ingresa una URL válida",
    date: "Ingresa una fecha válida",
    dateISO: "Ingresa una fecha válida (ISO)",
    number: "Ingresa un número válido",
    digits: "Solo se permiten números dígitos",
    creditcard: "Ingresa un número de tarjeta válido",
    equalTo: "Los valores deben coincidir",
    accept: "Please enter a value with a valid extension",
    maxlength: jQuery.validator.format("No ingreses más de {0} caracteres"),
    minlength: jQuery.validator.format("Ingresa al menos {0} caracteres"),
    rangelength: jQuery.validator.format("El texto debe tener entre {0} y {1} caracteres"),
    range: jQuery.validator.format("Ingresa un valor entre {0} y {1}"),
    max: jQuery.validator.format("Ingresa un valor menor o igual que {0}"),
    min: jQuery.validator.format("Ingresa un valor mayor o igual que {0}")
  });

  jQuery.validator.setDefaults({
    submitHandler: function (form) {
      $($(form).find('button')).attr('disabled', 'disabled');
      form.submit();
    }
  });

  moment.updateLocale('en', {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    weekdaysMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
  });
  $('#visit-us-datepicker').datetimepicker({
    format: 'DD/MM/YYYY',
    inline: true,
    icons: {
      time: '',
      date: '',
      up: '',
      down: '',
      previous: 'fa fa-angle-left',
      next: 'fa fa-angle-right',
      today: '',
      clear: '',
      close: ''
    },
    minDate: moment().tz("America/Mexico_City")
  });
  $('.visit-us-form').submit(function () {
    var dateValue = moment($('#visit-us-datepicker').data('DateTimePicker').date()['_d']);
    $('.visit-us-form #hidden_date').val(dateValue.format('DD/MM/YYYY'));
  });

  $('.login-form').validate({
    rules: {
      'username': {
        required: true
      },
      'password': {
        required: true
      }
    }
  });

  $('.contact-form, .visit-us-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: false
      },
      message: {
        required: false
      }
    }
  });
}());
