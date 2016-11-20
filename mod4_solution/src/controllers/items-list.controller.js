(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsListController', ItemsListController);

  ItemsListController.$inject = ['$stateParams', 'items'];
  function ItemsListController($stateParams, items) {
    var itemsList = this;
    itemsList.items = items;
  }
})();
