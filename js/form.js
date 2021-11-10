function Validator(selector) {
   // Rules
   var validatorRules = {
      //Bắt buộc
      required: function (value) {
         return value.trim() ? undefined : 'Vui lòng nhập trường này';
      },

      //Số kí tự tối thiểu min
      minLength: function (min) {
         return function (value) {
            return value.length >= min
               ? undefined
               : `Vui lòng nhập ít nhất ${min} ký tự`;
         };
      },

      //Đúng email
      email: function (value) {
         var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         return reg.test(value) ? undefined : 'Vui lòng nhập đúng email';
      },

      //Toàn bộ là số
      number: function (value) {
         var arrValue = value.split('');

         return arrValue.every(function (course) {
            return Number.isFinite(parseInt(course));
         })
            ? undefined
            : 'Vui lòng nhập số';
      },
   };

   //Hàm lấy ra thẻ cha chứ form-error
   function getParent(inputElement, nameForm) {
      while (inputElement.parentElement) {
         if (inputElement.parentElement.matches(nameForm)) {
            return inputElement.parentElement;
         }
         inputElement = inputElement.parentElement;
      }
   }

   //Chứa rule
   var formRules = {};
   //Lấy ra form
   var formElement = document.querySelector(selector);
   if (formElement) {
      var inputs = formElement.querySelectorAll('[name][rules]');
      for (var input of inputs) {
         var rules = input.getAttribute('rules').split('|');
         for (var rule of rules) {
            var ruleHasValue = rule.includes(':');
            if (ruleHasValue) {
               var ruleInfo = rule.split(':');
               rule = ruleInfo[0];
            }
            var ruleFunc = validatorRules[rule];
            if (ruleHasValue) {
               ruleFunc = validatorRules[rule](ruleInfo[1]);
            }

            if (!Array.isArray(formRules[input.name])) {
               formRules[input.name] = [ruleFunc];
            } else {
               formRules[input.name].push(ruleFunc);
            }
         }
         //Xử lí khi blur ra khỏi input
         input.onblur = validate;
         //Xử lí khi đang nhập vào ô input
         input.oninput = clearError;
      }
   }

   function validate(e) {
      var rules = formRules[e.target.name];
      var errorMessage;
      for (var rule of rules) {
         if (errorMessage) break;
         errorMessage = rule(e.target.value);
      }

      var parent = getParent(e.target, '.form-group');
      var errorElement = parent.querySelector('.form-error');
      if (errorMessage) {
         errorElement.innerHTML = errorMessage;
         parent.classList.add('invalid');
      } else {
         errorElement.innerHTML = '';
         parent.classList.remove('invalid');
      }
      return !errorMessage;
   }

   function clearError(e) {
      var parent = getParent(e.target, '.form-group');
      var errorElement = parent.querySelector('.form-error');
      errorElement.innerHTML = '';
      parent.classList.remove('invalid');
   }

   formElement.onsubmit = function (e) {
      e.preventDefault();
      var inputs = formElement.querySelectorAll('[name][rules]');
      var isErrorForm = false;
      for (var input of inputs) {
         //Khi bắt sự kiện của thẻ form
         //thì sẽ trả về lần lượt các thẻ input và
         //truyền vào hàm validate dưới dạng tham số

         var isValid = validate({
            target: input,
         });

         if (!isValid) {
            isErrorForm = true;
         }
      }
      if (!isErrorForm) formElement.submit();
   };
}
