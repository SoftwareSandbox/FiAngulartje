'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
