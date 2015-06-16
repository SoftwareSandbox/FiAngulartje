'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:openinghour
 * @description
 * # Openinghour
 */

angular.module('fiAngulartjeApp')
  .directive('placeorder', () => {
    return {
      templateUrl: 'views/directives/placeorder.html',
      restrict: 'E',
      controller: 'PlaceOrderCtrl',
      scope: {
        readonly: '=readonly'
      }
    };
  });
