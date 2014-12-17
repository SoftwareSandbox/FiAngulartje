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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/products/category/:catId', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
