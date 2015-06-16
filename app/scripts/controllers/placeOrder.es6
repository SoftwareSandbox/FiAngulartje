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
    $scope.hasNoComposition = () => { return !CompositionService.hasComposition(); };

    $scope.placeOrder = () => { 
      return PlaceOrder.save({sandwiches: [CompositionService.getComposition()]});
    };

    $scope.getPrice = () => { return CompositionService.getPrice(); };
  }]);
