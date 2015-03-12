'use strict';

describe('Controller: ShoppingCartCtrl', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let ShoppingCartCtrl,
    scope,
    shoppingCart;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
      scope = $rootScope.$new();
      scope.readonly = false;

      shoppingCart = {
        removedItem: null,
        items: [{a: 1}, {a: 2}],
        totalPrice: () => 10,
        removeItem: (item) => {
          shoppingCart.removedItem = item;
        },
        checkout: () => {
        },
        clearItems: () => {
        }
      };

      ShoppingCartCtrl = $controller('ShoppingCartCtrl', {
        $scope: scope,
        ShoppingCart: shoppingCart
      });
    })
  );

  it('items and total get put on scope', ()=> {
    expect(scope.items).toEqual(shoppingCart.items);
    expect(scope.total()).toBe(10);
    expect(scope.totalStatic).toBe(10);
  });

  it('remove delegates to service and recalculates price', ()=> {
    shoppingCart['totalPrice'] = () => 8;
    let item = {'a': 'b'};
    scope.remove(item);

    expect(shoppingCart.removedItem).toEqual(item);
    expect(scope.total()).toBe(8);
  });


  describe('Readonly true', () => {

    beforeEach(inject(($controller, $rootScope) => {
      scope = $rootScope.$new();
      scope.readonly = true;

      spyOn(shoppingCart, 'clearItems').and.callThrough();

      $controller('ShoppingCartCtrl', {
        $scope: scope,
        ShoppingCart: shoppingCart
      });
    }));

    it('when readonly is true, shopping cart gets cleared', ()=> {

      expect(shoppingCart.clearItems).toHaveBeenCalled();

    })
  })


})
;
