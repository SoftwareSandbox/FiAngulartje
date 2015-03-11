'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.shoppingCart
 * @description
 * # shoppingCart
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('ShoppingCart', ['$localStorage', ($localStorage) => {
    let storage = $localStorage.$default({shoppingCart: []});
    let items = storage.shoppingCart;

    function isEmpty() {
      return items.length === 0;
    }

    function addItem(item, quantity, remark) {
      items.push({quantity: quantity, remark: remark, product: item});
    }

    function totalPrice() {
      return items.reduce(function (previous, current) {
        return previous + (current.quantity * current.product.price);
      }, 0);
    }

    function getItems() {
      return items;
    }

    function removeItem(item) {
      let index = items.indexOf(item);

      items.splice(index, 1);
    }

    return {
      isEmpty: isEmpty,
      items: getItems,
      addItem: addItem,
      totalPrice: totalPrice,
      removeItem: removeItem
    };
  }])
;
