(function(){
  'use strict';

  angular.module("Menuapp")
  .controller("MenuappController", MenuappController);

  MenuappController.$inject = ["items"];
  function MenuappController(items) {
    var menulist = this;
    menulist.items = items;
  }
})();
