(function () {
  'use strict';
  /*global moment */
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
      previous: '',
      next: '',
      today: '',
      clear: '',
      close: ''
    }
  });
}());