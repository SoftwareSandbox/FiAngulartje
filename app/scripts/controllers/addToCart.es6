'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:AddToCartCtrl
 * @description
 * # AddToCartCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('AddToCartCtrl', ['$scope', 'ShoppingCart', ($scope, ShoppingCart)=> {
    $scope.quantity = 1;
    $scope.remark = '';

    $scope.add = function () {
      ShoppingCart.addItem($scope.product, $scope.quantity, $scope.remark);
      $scope.closeThisDialog('ok');
    };
  }]);
