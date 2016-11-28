(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signupCtrl = this;

  signupCtrl.submit = function() {
    MenuService.getFavMenuItem(signupCtrl.user.favoriteDish).then(function (response) {
      signupCtrl.user.favDish = response.data;
      MenuService.registerUser(signupCtrl.user);
      signupCtrl.success = true;
      signupCtrl.error = false;

    }, function (response) {
      signupCtrl.success = false;
      signupCtrl.error = true;
    });
  };
}

})();
