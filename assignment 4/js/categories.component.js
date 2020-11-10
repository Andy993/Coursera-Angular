(function () {
  'use strict';

  angular.module('Menuapp')
  .component('categories', {
    templateUrl: 'template/categories.template.html',
    controller: CategoriesComponentController,
    bindings: {
      items: "<"
    }
  });

  CategoriesComponentController.$inject = [];
  function CategoriesComponentController() {

  }

})();
