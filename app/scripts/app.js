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
      .otherwise({
        redirectTo: '/'
      });
  });
