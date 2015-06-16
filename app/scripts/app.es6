'use strict';

/**
 * @ngdoc overview
 * @name fiAngulartjeApp
 * @description
 * # fiAngulartjeApp
 *
 * Main module of the application.
 */
angular
  .module('fiAngulartjeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngDialog',
    'ngStorage',
    'randomizer'
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .state('products', {
        url: '/products/category/:categoryId',
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      }).state('randomize', {
        url: '/randomize',
        templateUrl: 'views/randomize.html'

      })
      .state('shoppingCart', {
        url: '/shoppingCart',
        templateUrl: 'views/shoppingCart.html',
        controller: 'ShoppingCartCtrl',
        onEnter: ['$state', 'ShoppingCart', ($state, ShoppingCart)=> {
          if (ShoppingCart.isEmpty()) {
            $state.go('home');
          }
        }]
      })
      .state('orderComplete', {
        url: '/orderComplete',
        templateUrl: 'views/orderComplete.html',
        controller: 'OrderCompleteCtrl'
      });
  });

angular.module('randomizer', []);
