'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('ProductsCtrl', ['$scope','$routeParams','Categories', 'Products', function ($scope, $routeParams, Categories, Products) {
      $scope.category = Categories.get({categoryId : $routeParams.catId});
      $scope.products = Products.byCategory({categoryId: $routeParams.catId});
    }]);
