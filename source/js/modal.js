'use strict';
(function () {
  var ESCAPE = 'Escape';
  var links = document.querySelectorAll('.button-buy-js');
  var popup = document.querySelector('.modal');
  var close = document.querySelector('.modal__close');
  var form = popup.querySelector('form');
  var phone = popup.querySelector('[name=telephone]');
  var message = document.querySelector('.success');
  var closeMessage = message.querySelector('.success__close');
  var tabsCase = document.querySelector('#tabs');

  function openModalHandler(evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
    phone.focus();
    document.body.style.overflow = 'hidden';
    tabsCase.style.overflowX = 'hidden';
    close.addEventListener('click', closeModalHandler);
    window.addEventListener('keydown', closeModalEscHandler);
    popup.addEventListener('click', closeModalOverlayHandler);
    form.addEventListener('submit', submitHandler);
  }

  function closeModalHandler() {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      form.reset();
      document.body.style.overflow = '';
      tabsCase.style.overflowX = '';
      close.removeEventListener('click', closeModalHandler);
      window.removeEventListener('keydown', closeModalEscHandler);
      popup.removeEventListener('click', closeModalOverlayHandler);
      form.removeEventListener('submit', submitHandler);
    }
  }

  function closeModalEscHandler(evt) {
    if (evt.key === ESCAPE) {
      closeModalHandler();
    }
  }

  function closeModalOverlayHandler(evt) {
    if (!evt.target.matches('.modal__form, .modal__form *')) {
      closeModalHandler();
    }
  }

  links.forEach(function (el) {
    el.addEventListener('click', openModalHandler);
  });

  function closeMessageHandler() {
    if (message.classList.contains('success--show')) {
      message.classList.remove('success--show');
      closeModalHandler();

      message.removeEventListener('click', closeMessageOverlayHandler);
      closeMessage.removeEventListener('click', closeMessageHandler);
      window.removeEventListener('keydown', closeMessageEscHandler);
    }
  }

  function closeMessageEscHandler(evt) {
    if (evt.key === ESCAPE) {
      closeMessageHandler();
    }
  }

  function closeMessageOverlayHandler(evt) {
    if (!evt.target.matches('.success__box, .success__box *')) {
      closeMessageHandler();
    }
  }

  function submitHandler(evt) {
    evt.preventDefault();
    message.classList.add('success--show');
    document.body.style.overflow = 'hidden';

    message.addEventListener('click', closeMessageOverlayHandler);
    closeMessage.addEventListener('click', closeMessageHandler);
    window.addEventListener('keydown', closeMessageEscHandler);
  }
})();
