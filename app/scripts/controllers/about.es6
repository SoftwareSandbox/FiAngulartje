'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('AboutCtrl', ($scope)=> {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
