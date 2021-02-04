'use strict';
(function () {
  var ESCAPE = 27;
  var MAX_TABLET_WIDTH = 1023;
  var MIN_DESCTOP_WIDTH = 1024;
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header-nav');

  var preSetMenu = function () {
    if (document.documentElement.clientWidth <= MAX_TABLET_WIDTH) {
      if (!nav.classList.contains('header-nav--open')) {
        nav.classList.add('header-nav--absolut');
      } else {
        nav.classList.remove('header-nav--absolut');
      }
    }
  };

  var hideMenuHandler = function () {
    nav.classList.remove('header-nav--open');
    burger.classList.remove('header__burger--hidden');
  };

  var switchMenuHandler = function () {
    preSetMenu();
    nav.classList.toggle('header-nav--open');
    burger.classList.toggle('header__burger--close');
  };

  var closeEscMenuHandler = function (evt) {
    if (evt.keyCode === ESCAPE) {
      if (nav.classList.contains('header-nav--open')) {
        nav.classList.remove('header-nav--open');
        burger.classList.remove('header__burger--close');
      }
    }
  };

  var closeOutMenuHandler = function (evt) {
    // window.MatchesForIE.changeMatchesForIE();
    if (!evt.target.matches('.header__burger')) {
      var dropdowns = document.querySelector('.header-nav');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('header-nav--open')) {
          openDropdown.classList.remove('header-nav--open');
          burger.classList.toggle('header__burger--close');
        }
      }
    }
  };

  var closeMenuResizeHandler = function () {
    if (document.documentElement.clientWidth >= MIN_DESCTOP_WIDTH) {
      nav.classList.remove('header-nav--absolut');
    } else {
      nav.classList.add('header-nav--absolut');
    }
  };

  window.headerMenu = {
    switchMenuHandler: switchMenuHandler,
    hideMenuHandler: hideMenuHandler,
    closeOutMenuHandler: closeOutMenuHandler,
    closeEscMenuHandler: closeEscMenuHandler,
    closeMenuResizeHandler: closeMenuResizeHandler
  };

  window.addEventListener('load', window.headerMenu.hideMenuHandler);
  window.addEventListener('resize', window.headerMenu.closeMenuResizeHandler);
  document.addEventListener('click', window.headerMenu.closeOutMenuHandler);
  document.addEventListener('keydown', window.headerMenu.closeEscMenuHandler);
  burger.addEventListener('click', window.headerMenu.switchMenuHandler);

})();
