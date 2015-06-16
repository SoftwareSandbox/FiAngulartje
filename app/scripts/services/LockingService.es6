'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.composition
 * @description
 * # composition
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('LockingService', ['Buns', 'Toppings', 'Condiments', (Buns, Toppings, Condiments) => {
    function lockBun(bun) {
      Buns.lock(bun);
    }

    function unlockBun(bun) {
      Buns.unlock(bun);
    }

    function lockTopping(topping) {
      Toppings.lock(topping);
    }

    function unlockTopping(topping) {
      Toppings.unlock(topping);
    }

    function lockCondiment(condiment) {
      Condiments.lock(condiment);
    }

    function unlockCondiment(condiment) {
      Condiments.unlock(condiment);
    }

    return {
      lockBun: lockBun,
      unlockBun: unlockBun,
      lockTopping: lockTopping,
      unlockTopping: unlockTopping,
      lockCondiment: lockCondiment,
      unlockCondiment: unlockCondiment
    };
  }]);

