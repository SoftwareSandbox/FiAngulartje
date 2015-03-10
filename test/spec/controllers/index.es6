'use strict';

describe('Controller: IndexCtrl', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let IndexCtrl,
    scope,
    shoppingCart;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    shoppingCart = {
      isEmpty: () => true
    };

    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope,
      ShoppingCart: shoppingCart
    });
  }));

  it('shoppingCartIsEmpty goes to service', () => {
    expect(scope.shoppingCartIsEmpty()).toBeTruthy();
  });
});
