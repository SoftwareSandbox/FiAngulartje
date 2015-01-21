'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:FiProduct
 * @description
 * # FiProduct
 */
angular.module('fiAngulartjeApp')
  .directive('fiproduct', function () {
    return {
      templateUrl: 'views/directives/fiproduct.html',
      restrict: 'E',
      scope: {
      	product: '=product'
      }
    };
  });
