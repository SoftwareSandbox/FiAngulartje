'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('ProductsCtrl', ['$scope','$routeParams','Categories', function ($scope, $routeParams, Categories) {
      $scope.category = Categories.get({categoryId : $routeParams.catId});
    }]);
