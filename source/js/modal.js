'use strict';
(function () {
  var ESCAPE = 'Escape';
  var ENTER = 'Enter';
  var links = document.querySelectorAll('.button-buy-js');
  var popup = document.querySelector('.enquiry');
  var message = document.querySelector('.field-text__error')
  var close = document.querySelector('.button-close');
  var form = popup.querySelector('form');
  var phone = popup.querySelector('[name=telephone]');

  function openClickHandler (evt) {
    evt.preventDefault();
    popup.classList.add('enquiry--show');
    phone.focus();
    close.addEventListener('click', closeClickHandler);
    window.addEventListener('keydown',closeEscHandler);
  };

  function openEnterHandler (evt) {
    if (evt.key === ENTER) {
      evt.preventDefault();
      openClickHandler();
    }
  };

  function closeClickHandler () {
    if (popup.classList.contains('enquiry--show')) {
      popup.classList.remove('enquiry--show');
      message.classList.remove('field-text__error--show');
      form.reset();
      close.removeEventListener('click', closeClickHandler);
      window.removeEventListener('keydown',closeEscHandler);
    }
  };

  function closeEscHandler (evt) {
    if (evt.key === ESCAPE) {
      closeClickHandler();
    }
  };

  links.forEach(function(el) {
    el.addEventListener('click', openClickHandler);
    el.addEventListener('keydown', openEnterHandler);
  });

})();
