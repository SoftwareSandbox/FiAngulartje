'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.categories
 * @description
 * # categories
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Categories', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('api/v1/categories/categories.json', {}, {
        query: { method:'GET', isArray:true }
    });
  });
