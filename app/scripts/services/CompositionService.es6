'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.composition
 * @description
 * # composition
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('CompositionService', [, () => {
    let composition;

    function getComposition() {
    }

    function setComposition() {
    }

    function getPrice() {
    }

    return {
      getComposition: getComposition,
      setComposition: setComposition,
      getPrice: getPrice
    };
  }]);
