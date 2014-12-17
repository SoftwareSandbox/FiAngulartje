'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('MenuCtrl', ['$scope', 'Categories', function($scope, Categories) {
    $scope.categories = Categories.query();
  }]);
