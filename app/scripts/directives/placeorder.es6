'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:openinghour
 * @description
 * # Openinghour
 */

angular.module('fiAngulartjeApp')
  .directive('placeorder', [() => {
    return {
      template: '<button data-ng-click="placeOrder()">Place Order</button>',
      restrict: 'E',
      controller: 'PlaceOrderCtrl',
      scope: {
        readonly: '=readonly'
      }
    };
  }]);
