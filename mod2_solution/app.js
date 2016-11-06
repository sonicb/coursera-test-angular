(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  // To Buy List - controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.removeBuyItemAndSendItToBought = function (itemIndex) {
      try {
        ShoppingListCheckOffService.removeBuyItemAndSendItToBought(itemIndex);
      } catch (error) {
          toBuy.errorMessage = error.message;
      }
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;


    try {
     bought.addItemToBought = ShoppingListCheckOffService.getItemsBought();
    } catch (error) {
      bought.errorMessage = error.message;
    }


  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items to buy
    var itemsToBuy = [
      {
        name: "Cookies",
        quantity: 10
      },
      {
        name: "Milk",
        quantity: 2
      },{
        name: "Bread",
        quantity: 3
      },{
        name: "Bananas",
        quantity: 8
      },{
        name: "Pepto Bismol",
        quantity: 3
      }
    ];

    //List of shopping items bought
    var itemsBought = [];

    service.removeBuyItemAndSendItToBought = function (itemIndex) {
      var shoppingList = itemsToBuy[itemIndex];
      itemsBought.push(shoppingList);
      itemsToBuy.splice(itemIndex, 1);

      if (itemsToBuy.length == 0) {
        throw new Error("Everything is bought!");
      }
    }

    service.getItemsToBuy = function () {
      return itemsToBuy;
    }

    service.getItemsBought = function () {

      return itemsBought;

    
    }
  }
})();
