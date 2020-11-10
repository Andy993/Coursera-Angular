(function() {
  "use strict";

  angular.module("Menuapp")
    .controller("CategoriesListController", CategoriesListController);

  CategoriesListController.$inject = ["MenuDataService", "categories"];
  function CategoriesListController (MenuDataService, categories) {
    var ctr1 = this;
    ctr1.categories = categories;
  }
})();
