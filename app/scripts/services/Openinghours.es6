'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.openinghours
 * @description
 * # openinghours
 * Service in the fiAngulartjeApp.
 */

angular.module('fiAngulartjeApp')
  .service('Openinghours', ['$resource','Fiazard',  ($resource, Fiazard) => {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(`${Fiazard.baseurl}api/v1/openinghours/`,{});
  }]);
