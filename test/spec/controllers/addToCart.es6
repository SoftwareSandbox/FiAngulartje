'use strict';

describe('Controller: AddToCartCtrl', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let AddToCartCtrl,
    scope,
    shoppingCart,
    closeThisDialogWasCalled;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();

    shoppingCart = {
      product: null,
      quantity: -1,
      remark: null,
      addItem: function (product, quantity, remark) {
        this.product = product;
        this.quantity = quantity;
        this.remark = remark
      }
    };

    closeThisDialogWasCalled = false;

    scope.closeThisDialog = function () {
      closeThisDialogWasCalled = true;
    }

    AddToCartCtrl = $controller('AddToCartCtrl', {
      $scope: scope,
      ShoppingCart: shoppingCart
    });
  }));


  it('scope gets initialized correctly', () => {
    expect(scope.quantity).toBe(1);
    expect(scope.remark).toEqual('');
  });

  it('Can add item to cart', () => {
    expect(closeThisDialogWasCalled).toBeFalsy();
    scope.product = {};
    scope.remark = 'remark';

    scope.add();
    expect(shoppingCart.product).toEqual({});
    expect(shoppingCart.quantity).toEqual(1);
    expect(shoppingCart.remark).toEqual('remark');
    expect(closeThisDialogWasCalled).toBeTruthy();
  });
});
