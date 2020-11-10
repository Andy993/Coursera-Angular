(function () {
  'use strict';

  angular.module("Menuapp")
  .controller("ItemsListController",ItemsListController);

  ItemsListController.$inject = ["$stateParams","items"];
  function ItemsListController($stateParams,items) {
    var ctr1 = this;
    ctr1.items = items;
  }
})();
