'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('ProductsCtrl', ['$scope','$stateParams','Categories', 'Products', function ($scope, $stateParams, Categories, Products) {
        $scope.category = Categories.get({categoryId : $stateParams.categoryId});
        $scope.products = Products.byCategory({categoryId: $stateParams.categoryId});
    }]);
