'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.condiments
 * @description
 * # condiments
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Condiments', ['$resource', 'Fiazard', ($resource, Fiazard) => {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(`${Fiazard.baseurl}api/ordering/condiment`, {},
      {
        getAll: {
          method: 'GET',
          isArray: true
        }, lock: {
        method: 'POST',
        url: `${Fiazard.baseurl}api/ordering/condiment/lock`
      }, unlock: {
        method: 'POST',
        url: `${Fiazard.baseurl}api/ordering/condiment/unlock`
      }

      });
  }]);
