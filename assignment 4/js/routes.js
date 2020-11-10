(function () {
  'use strict';

  angular.module('Menuapp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'template/home.template.html'
    })

    // categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'template/categories-list.template.html',
      controller: 'CategoriesListController as ctr1',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    //categories items page
    .state('categories.items',{
      url: '/items/{categoryShortName}',
      templateUrl: "template/items-list.template.html",
      controller: "ItemsListController as ctr1",
      params: {categoryShortName: null},
      resolve:{
        items: ["$stateParams","MenuDataService", function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }

})();
