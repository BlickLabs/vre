(function () {
  'use strict';
  var mobile = window.matchMedia('(max-width: 1100px)');

  function detectTouch(e) {
    if ($('.homepage-cover').length) {
      if (!$(e.target).is('.homepage-cover .menu-list') && !$(e.target).closest('.homepage-cover .menu-list').length && !$(e.target).is('#navbar-trigger') && $('#navbar-trigger').prop('checked') === true) {
        $('#navbar-trigger').prop('checked', false);
      }
    } else if (!$(e.target).is('.navbar-menu-list') && !$(e.target).closest('.navbar-menu-list').length && !$(e.target).is('#navbar-trigger') && $('#navbar-trigger').prop('checked') === true) {
      $('#navbar-trigger').prop('checked', false);
    }
  }

  function checkScroll() {
    if ($(window).scrollTop() >= 30) {
      $('.phone-box').addClass('fix-in-top');
      $('.homepage-menu').addClass('fix-in-top');
      if (mobile.matches) {
        document.addEventListener('touchstart', detectTouch, false);
      }
    } else {
      $('.phone-box').removeClass('fix-in-top');
      $('.homepage-menu').removeClass('fix-in-top');
      document.removeEventListener('touchstart', detectTouch, false);
    }
  }

  function checkHomepage() {
    if ($('.homepage-cover').length) {
      checkScroll();
      $(window).scroll(function () {
        checkScroll();
      });
    } else {
      if (mobile.matches) {
        document.addEventListener('touchstart', detectTouch, false);
      } else {
        document.removeEventListener('touchstart', detectTouch, false);
      }
    }
  }

  checkHomepage();

  $(window).resize(function () {
    checkHomepage();
  });
}());