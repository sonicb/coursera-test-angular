(function (){
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.foodItem = "";
    $scope.message = "";

    $scope.checkLunch = function(foodItem){
      var foodItemArray = foodItem.split(',');

      if(foodItem){
        $scope.message = andTheMessageIs(foodItemArray.length);
      }
      else {
        $scope.message = "Please enter data first.";
      }

    };


    function andTheMessageIs(numFoodItems){
      if (numFoodItems > 3){
        return "That's too much!";
      }
      else if (numFoodItems <= 3){
        return "Enjoy";
      }

    }
  }
})();
