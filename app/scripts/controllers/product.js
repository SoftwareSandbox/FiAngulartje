'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
