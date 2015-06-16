'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:shoppingCartCtrl
 * @description
 * # PlaceOrderCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('PlaceOrderCtrl', ['$scope', 'CompositionService', 'PlaceOrder', ($scope, CompositionService, PlaceOrder) => {
    $scope.placeOrder = ()=> {
      PlaceOrder.save(CompositionService.getComposition());
    };
  }]);
