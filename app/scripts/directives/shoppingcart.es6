'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:shoppingcart
 * @description
 * # Shopping cart
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
