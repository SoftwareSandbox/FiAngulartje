'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:shoppingCartCtrl
 * @description
 * # ShoppingCartCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('ShoppingCartCtrl', ['$scope', 'ShoppingCart', ($scope, ShoppingCart) => {
    $scope.total = ()=> ShoppingCart.totalPrice();

    $scope.totalStatic = ShoppingCart.totalPrice();

    $scope.items = ShoppingCart.items;

    $scope.remove = (item) => {
      ShoppingCart.removeItem(item);
    };

    $scope.checkout = () => {
      ShoppingCart.checkout();
    };

    if ($scope.readonly) {
      ShoppingCart.clearItems();
    }
  }]);
