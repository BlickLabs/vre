var addBrochureListener = (function () {
  'use strict';
  /*global djangoURLs, ga, hbspt*/
  return function (developmentName, formID) {
    var development = developmentName.toLowerCase(),
      gaEventName = 'Brochure' + developmentName;

    hbspt.forms.create({
      css: '',
      portalId: '2469317',
      formId: formID,
      target: '#brochure-form-wrapper',
      onFormSubmit: function ($form) {
        var data = $form.serializeArray();
        data.push({name: 'source', value: development});
        ga('send', 'event', gaEventName, 'ok');
        $.ajax({
          url: djangoURLs.suscribeToNewsletter,
          type : 'POST',
          data: data
        });
        $form.hide();
      }
    });
  };
}());