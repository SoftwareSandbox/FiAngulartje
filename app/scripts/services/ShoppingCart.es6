'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.shoppingCart
 * @description
 * # shoppingCart
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('ShoppingCart', ['$localStorage', '$state', ($localStorage, $state) => {

    var storage = $localStorage.$default({shoppingCart: []});
    let items = storage.shoppingCart;

    function isEmpty() {
      return items.length === 0;
    }

    function addItem(item, quantity, remark) {
      items.push({quantity: quantity, remark: remark, product: item});
    }

    function totalPrice() {
      return items.reduce((total, current) => total + (current.quantity * current.product.price), 0);
    }

    function removeItem(item) {
      let index = items.indexOf(item);

      items.splice(index, 1);
    }

    function checkout() {
      console.log('checkout');
      $state.go('orderComplete');
    }

    function clearItems() {
      storage.shoppingCart = [];
      items = storage.shoppingCart;
    }

    return {
      isEmpty: isEmpty,
      items: items,
      addItem: addItem,
      totalPrice: totalPrice,
      removeItem: removeItem,
      checkout: checkout,
      clearItems: clearItems
    };
  }]);
