'use strict';
(function () {
  var phoneInputs = document.querySelectorAll('.input-tel-js');
  var mailInputs = document.querySelectorAll('.input-mail-js');
  var submitBtns = document.querySelectorAll('.button-submit-js');
  var phoneMessage = document.querySelectorAll('.message-tel-js');
  var mailMessage = document.querySelectorAll('.message-mail-js');

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select()
    }
  };

  function applyMaskPhone(evt) {
    var matrix = '+7 (___) ___ ____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
    });
    if (evt.type === 'blur') {
      if (this.value.length === 2) this.value = ''
    } else setCursorPosition(this.value.length, this)
  };

  function error_message(elem, message) {
    elem.forEach(function (el) {
      el.innerText = message;
    });
  };

  function validatePhoneInputsHandler() {
    if (this.value === '') {
      this.classList.add('input-error');
      error_message(phoneMessage, 'Это поле обязательно для заполнения');
    } else if (this.value.length < 17) {
      this.classList.add('input-error');
      error_message(phoneMessage, 'Телефон должен содержать 11 цифр');
      submitBtns.forEach(function (button) {
        button.disabled = true;
        button.classList.add('button-disabled');
      });
    }

    if (!this.value === '' || this.value.length >= 17) {
      this.classList.remove('input-error');
      error_message(phoneMessage, '');
      submitBtns.forEach(function (button) {
        button.disabled = false;
        button.classList.remove('button-disabled');
      });
    }



    // else {
    //   this.classList.remove('input-error');
    //   error_message(phoneMessage, '');
    //   submitBtns.forEach(function (button) {
    //     button.disabled = false;
    //     button.classList.remove('button-disabled');
    //   });
    // }
  };

  function validateMailInputsHandler() {
    if (!this.value.includes('@') || !this.value.includes('.')) {
      this.classList.add('input-error');
      error_message(mailMessage, 'Неверный e-mail');
    }

    if (this.value.includes('@') && this.value.includes('.') || this.value === '') {
      this.classList.remove('input-error');
      error_message(mailMessage, '');
    }

    // else {
    //   this.classList.remove('input-error');
    //   error_message(mailMessage, '');
    // }
  };

  phoneInputs.forEach(function(el) {
    el.addEventListener('input', applyMaskPhone, false);
    el.addEventListener('focus', applyMaskPhone, false);
    el.addEventListener('blur', applyMaskPhone, false);
  });

  phoneInputs.forEach(function (el) {
    el.addEventListener('input', validatePhoneInputsHandler);
  });

  mailInputs.forEach(function(el) {
    el.addEventListener('input', validateMailInputsHandler);
  });

})();
