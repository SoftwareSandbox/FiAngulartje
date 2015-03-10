'use strict';

describe('Service: shoppingCart', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let ShoppingCart;

  beforeEach(inject(function (_ShoppingCart_) {
    ShoppingCart = _ShoppingCart_;
  }));

  it('Items starts off empty', () => {
    expect(ShoppingCart.items().length).toBe(0);
    expect(ShoppingCart.isEmpty()).toBeTruthy();
  });

  it('Can add item to the shopping cart', ()=> {
    ShoppingCart.addItem({});

    expect(ShoppingCart.items().length).toBe(1);
    expect(ShoppingCart.isEmpty()).toBeFalsy();
  });

  it('Can calculate total price', ()=> {
    ShoppingCart.addItem({price: 2}, 2, 'hello');
    ShoppingCart.addItem({price: 5}, 1, 'test');

    expect(ShoppingCart.totalPrice()).toBe(9);
  });

  it('Can remove item', ()=> {
    ShoppingCart.addItem({price: 2}, 2, 'hello');
    ShoppingCart.addItem({price: 5}, 1, 'test');

    expect(ShoppingCart.items().length).toBe(2);

    ShoppingCart.removeItem(ShoppingCart.items()[0]);

    expect(ShoppingCart.items().length).toBe(1);

  })
});
