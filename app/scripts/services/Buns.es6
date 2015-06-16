'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.buns
 * @description
 * # buns
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Buns', ['$resource', 'Fiazard', ($resource, Fiazard) => {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(`${Fiazard.baseurl}api/ordering/bun`, {},
      {
        getAll: {
          method: 'GET',
          isArray: true
        }, lock: {
          method: 'POST',
          url: `${Fiazard.baseurl}api/ordering/bun/lock`
        }, unlock: {
          method: 'POST',
          url: `${Fiazard.baseurl}api/ordering/bun/unlock`
      }

      });
  }]);
