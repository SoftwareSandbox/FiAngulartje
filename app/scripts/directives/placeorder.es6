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
      template: '<button />',
      restrict: 'E',
      controller: 'PlaceOrderCtrl',
      scope: {
        readonly: '=readonly'
      }
    };
  }]);
