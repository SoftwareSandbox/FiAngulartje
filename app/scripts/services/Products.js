'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.Products
 * @description
 * # Products
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Products', ['$resource','Fiazard', function ($resource, Fiazard) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(Fiazard.baseurl + 'api/v1/products/:productId',
        {}, // defaults
        // actions
        { byCategory: {
            method: 'GET',
            params: {'categoryId':'categoryId'},
            isArray: true
        }}
        );
  }]);
