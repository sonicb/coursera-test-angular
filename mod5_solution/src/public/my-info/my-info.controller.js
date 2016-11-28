(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo'];
function MyInfoController(userInfo) {
  var myinfoCtrl = this;
  myinfoCtrl.user = userInfo;
}

})();
