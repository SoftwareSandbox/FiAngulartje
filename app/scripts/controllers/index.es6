'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('IndexCtrl', ['$scope', 'ShoppingCart', ($scope, ShoppingCart) => {
    $scope.shoppingCartIsEmpty = function () {
      return ShoppingCart.isEmpty();
    }
  }]);
