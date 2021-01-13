'use strict';
(function () {
  var ENTER = 'Enter';
  var tabsLink = document.querySelectorAll('.tab-link-js');
  var tabsContent = document.querySelectorAll('.tab__item');
  var directions = document.querySelectorAll('.direction__item');
  var tabList = document.querySelector('#tabs');

  function openDetail() {
    var btn = document.activeElement;
    var country = btn.dataset.country;

    tabsContent.forEach(function(el) {
      el.classList.remove('active');
    });

    tabsLink.forEach(function(el) {
      if (el.dataset.country === country) {
      el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    document.querySelector('#' + country).classList.add('active');
    tabList.scrollIntoView();
  };

  tabsLink.forEach(function(el) {
    el.addEventListener('click', function() {
      openDetail();
    });
  });

  directions.forEach(function(el) {
    el.addEventListener('click', function() {
      openDetail();
      el.blur();
    });

    el.addEventListener('keydown', function(evt) {
      if (evt.key === ENTER) {
        openDetail();
        el.blur();
      }
    });
  });

})();
