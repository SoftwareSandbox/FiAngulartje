'use strict';

describe('Controller: PlaceOrderCtrl', () => {

  let compositionServiceMock,
      placeOrderMock,
      dummyComposition,
      scope;

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope, _CompositionService_, _PlaceOrder_) => {
      scope = $rootScope.$new();
      dummyComposition = {'name':'derp'};
      compositionServiceMock = mockito4js.spy(_CompositionService_);
      placeOrderMock = mockito4js.spy(_PlaceOrder_);

      $controller('PlaceOrderCtrl', {
        $scope: scope,
        CompositionService: compositionServiceMock,
        PlaceOrder: placeOrderMock
      });
    })
  );

  describe('placeOrder', ()=>{

    it('posts the composition to the PlaceOrderService', ()=> {
      mockito4js.doReturn(dummyComposition).when(compositionServiceMock).getComposition();

      scope.placeOrder();

      mockito4js.verify(placeOrderMock, mockito4js.once()).save(dummyComposition);
    });

  });
})
;
