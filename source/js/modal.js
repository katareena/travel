'use strict';
(function () {
  var ESCAPE = 'Escape';
  var links = document.querySelectorAll('.button-buy-js');
  var popup = document.querySelector('.modal');
  var message = document.querySelector('.field-text__error');
  var close = document.querySelector('.modal__close');
  var form = popup.querySelector('form');
  var phone = popup.querySelector('[name=telephone]');

  function openClickHandler () {
    popup.classList.add('modal--show');
    phone.focus();
    close.addEventListener('click', closeClickHandler);
    window.addEventListener('keydown',closeEscHandler);
  };

  function closeClickHandler () {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      message.classList.remove('field-text__error--show');
      form.reset();
      close.removeEventListener('click', closeClickHandler);
      window.removeEventListener('keydown', closeEscHandler);
    }
  };

  function closeEscHandler (evt) {
    if (evt.key === ESCAPE) {
      closeClickHandler();
    }
  };

  links.forEach(function(el) {
    el.addEventListener('click', openClickHandler);
  });

  // если обработчик не нужно удалять, он записывается:

  // links.forEach(function(el) {
  //   el.addEventListener('click', function() {
  //     openClickHandler();
  //   });

  //   el.addEventListener('keydown', function() {
  //     if (evt.key === ENTER) {
  //       openClickHandler();
  //     }
  //   });
  // });

})();
