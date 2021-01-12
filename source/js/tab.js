'use strict';
(function () {
  var ENTER = 'Enter';
  var tabLinks = document.querySelectorAll('.tab-link-js');
  var tabContent = document.querySelectorAll('.tab__item');
  var directions = document.querySelectorAll('.direction__item');

  function openTabs(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;

    tabContent.forEach(function(el) {
      el.classList.remove('active');
    });

    tabLinks.forEach(function(el) {
      el.classList.remove('active');
    });

    document.querySelector('#' + country).classList.add('active');
    btnTarget.classList.add('active');
  };

  function openDetail() {
    var btn = document.activeElement;
    var country = btn.dataset.country;

    tabContent.forEach(function(el) {
      el.classList.remove('active');
    });

    document.querySelector('#' + country).classList.add('active');
    document.querySelector('#' + country).scrollIntoView();
  };

  tabLinks.forEach(function(el) {
    el.addEventListener('click', openTabs);
  });

  directions.forEach(function(el) {
    el.addEventListener('keydown', function(evt) {
      if (evt.key === ENTER) {
        openDetail();
      }
    });
  });

})();
