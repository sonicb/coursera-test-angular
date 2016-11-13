(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var NDC = this;

    NDC.search = function (searchTerm) {

      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then (function (data) {
        NDC.found = data;

      })

    }

    NDC.removeItem = function(itemIndex) {
      console.log(itemIndex);
      NDC.found.splice(itemIndex, 1);
    };

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var searchService = this;

    searchService.getMatchedMenuItems = function (searchTerm) {
      return $http ({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      })
      .then(function (result) {
        if (!searchTerm) {
          return [];
        }

        var foundItems = result.data.menu_items;
        foundItems = foundItems.filter(function (item) {
          //console.log("item is: " + item);
          return item.description.indexOf(searchTerm) !== -1;
        });
        return foundItems;
      })
    } // end of getMatchedMenuItems
  }
})();
