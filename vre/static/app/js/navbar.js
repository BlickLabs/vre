(function () {
  'use strict';
  if ($('.homepage-cover').length) {
    if ($(window).scrollTop() >= 30) {
      $('.phone-box').addClass('fix-in-top');
      $('.homepage-menu').addClass('fix-in-top');
    } else {
      $('.phone-box').removeClass('fix-in-top');
      $('.homepage-menu').removeClass('fix-in-top');
    }
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 30) {
        $('.phone-box').addClass('fix-in-top');
        $('.homepage-menu').addClass('fix-in-top');
      } else {
        $('.phone-box').removeClass('fix-in-top');
        $('.homepage-menu').removeClass('fix-in-top');
      }
    });
  }
}());