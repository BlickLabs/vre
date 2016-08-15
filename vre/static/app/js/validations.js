(function () {
  'use strict';
  /*global moment */
  /*jslint sub:true*/
  moment.updateLocale('en', {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    weekdaysMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
  });
  moment().isoWeekday(1);
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
    $('.visit-us-form #hidden_date').val($('#visit-us-datepicker').data('DateTimePicker').date()['_d']);
  });
}());