'use strict';

describe('Controller: OrderCompleteCtrl', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let OrderCompleteCtrl,
    scope,
    shoppingCart,
    interval,
    state,
    intervalStop;

  shoppingCart = {
    items: ['a', 'b'],
    clearItems: ()=> {
    }
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope, _$state_) => {
    scope = $rootScope.$new();
    state = _$state_;

    spyOn(state, 'go').and.callThrough();
    spyOn(shoppingCart, 'clearItems').and.callThrough();
    interval = jasmine.createSpy('$interval', {
      cancel: ()=> {
      }
    }).and.returnValue(intervalStop);
    spyOn(interval, 'cancel').and.callThrough();

    OrderCompleteCtrl = $controller('OrderCompleteCtrl', {
      $scope: scope,
      ShoppingCart: shoppingCart,
      $interval: interval,
      $state: state
    });

    spyOn(scope, 'tick').and.callThrough();
  }));

  it('Items and remaining count get put on scope, shoppingcart is cleared and interval is started', () => {
    expect(scope.items.length).toBe(2);
    expect(scope.remaining).toBe(5);

    expect(shoppingCart.clearItems).toHaveBeenCalled();
  });

  it('Countdown gets started correctly', ()=> {
    var latestArgs = interval.calls.mostRecent().args;
    latestArgs[0]();

    expect(latestArgs[1]).toBe(1000);
    expect(scope.tick).toHaveBeenCalled();
  });

  it('Tick counts down to 1 and then transitions to home', ()=> {
    expect(scope.remaining).toBe(5);
    scope.tick();
    expect(scope.remaining).toBe(4);
    scope.tick();
    expect(scope.remaining).toBe(3);
    scope.tick();
    expect(scope.remaining).toBe(2);
    scope.tick();
    expect(scope.remaining).toBe(1);
    scope.tick();
    expect(interval.cancel).toHaveBeenCalledWith(intervalStop);
    expect(state.go).toHaveBeenCalledWith('home');
  })
});
