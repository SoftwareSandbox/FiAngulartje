'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.composition
 * @description
 * # composition
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('CompositionService', [() => {
    let composition;

    function getComposition() {
      return composition;
    }

    function setComposition(comp) {
      composition = comp;
    }

    function hasComposition() {

      return composition !== undefined;
    }

    function getPrice() {
      if (!hasComposition()) {
        return null;
      } else {
        let price = 0;
        price += composition.bun.price;

        price += composition.toppings.reduce(function (total, current) {
          return total + current.price;
        }, 0);

        price += composition.condiments.reduce(function (total, current) {
          return total + current.price;
        }, 0);
        return price;
      }

    }

    return {
      getComposition: getComposition,
      setComposition: setComposition,
      getPrice: getPrice,
      hasComposition: hasComposition
    };
  }]);
