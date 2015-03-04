'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.categories
 * @description
 * # categories
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Categories', ['$resource', 'Fiazard', ($resource, Fiazard) => {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(`${Fiazard.baseurl}api/v1/categories/:categoryId`, {});
  }]);
