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
    let composition = {bun: {}, toppings: [{}], condiments: [{}]};

    function getComposition() {
      return composition;
    }

    function setComposition(comp) {
      composition = comp;
    }

    function hasValidComposition() {
      if (composition.bun.price === undefined) {
        return false;
      }
      if (composition.toppings.filter((topping) =>
        topping.price === undefined)
          .length > 0) {
        return false;
      }
      return composition.condiments.filter((condiment)  =>
          condiment.price === undefined
        ).length <= 0;

    }

    function getPrice() {
      if (!hasValidComposition()) {
        return null;
      } else {
        let price = 0;
        price += parseFloat(composition.bun.price);

        price += composition.toppings.reduce(function (total, current) {
          return total + parseFloat(current.price);
        }, 0);

        price += composition.condiments.reduce(function (total, current) {
          return total + parseFloat(current.price);
        }, 0);
        return price.toFixed(2);
      }

    }

    return {
      getComposition: getComposition,
      setComposition: setComposition,
      getPrice: getPrice,
      hasComposition: hasValidComposition
    };
  }]);
