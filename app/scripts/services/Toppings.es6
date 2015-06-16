'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.toppings
 * @description
 * # toppings
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Toppings', ['$resource', 'Fiazard', ($resource, Fiazard) => {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(`${Fiazard.baseurl}api/ordering/topping`, {},
      {
        getAll: {
          method: 'GET',
          isArray: true
        }, lock: {
        method: 'POST',
        url: `${Fiazard.baseurl}api/ordering/topping/lock`
      }, unlock: {
        method: 'POST',
        url: `${Fiazard.baseurl}api/ordering/topping/unlock`
      }

      });

  }]);
