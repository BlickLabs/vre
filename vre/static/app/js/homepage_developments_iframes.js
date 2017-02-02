(function () {
  'use strict';
  $('.iframe-option').click(function (e) {
    e.preventDefault();
    $(this).addClass('active')
      .siblings().removeClass('active');
    $('.container-360 iframe').attr('src', $(this).attr('data-iframe-url'));
  });
  $('.help-360').click(function help360() {
    $(this).remove();
  });
}());