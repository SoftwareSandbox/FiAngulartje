'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:FiProduct
 * @description
 * # FiProduct
 */
angular.module('fiAngulartjeApp')
  .directive('fiproduct',  () => {
    return {
      templateUrl: 'views/directives/fiproduct.html',
      restrict: 'E',
      scope: {
      	product: '=product'
      },
      controller: function($scope) {
      	let ingredientsarray = $scope.product.composition.concat($scope.product.sauces);
      	$scope.ingredients = ingredientsarray.join(', ');
      	$scope.price = `€  ${$scope.product.price}`;
      }
    };
  });
