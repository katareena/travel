'use strict';
(function () {
  var tabLinks = document.querySelectorAll('.tabs__link');
  var tabContent = document.querySelectorAll('.tab__item');

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

  tabLinks.forEach(function(el) {
    el.addEventListener('click', openTabs);
  });

})();
