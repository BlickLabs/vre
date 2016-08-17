(function () {
  'use strict';
  $('.drawing-selector').click(function () {
    var drawingPictureContainer = '';
    if ($(this).parent().is(':first-child')) {
      drawingPictureContainer = '.drawing-picture:nth-child(2)';
    } else {
      drawingPictureContainer = '.drawing-picture:nth-child(3)';
    }
    $(drawingPictureContainer + ' span').text($(this).text());
    $(drawingPictureContainer + ' img[data-department="' + $(this).text() + '"]')
      .addClass('show')
      .removeClass('hide')
      .siblings('img').addClass('hide').removeClass('show');
    $(this).siblings('.drawing-selector').removeClass('active');
    $(this).addClass('active');
  });
}());