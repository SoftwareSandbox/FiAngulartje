'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:openinghour
 * @description
 * # Openinghour
 */

angular.module('fiAngulartjeApp')
  .directive('shoppingcart', [() => {
    return {
      templateUrl: 'views/directives/shoppingcart.html',
      restrict: 'E',
      controller: 'ShoppingCartCtrl',
      scope: {
        readonly: '=readonly'
      }
    };
  }]);
