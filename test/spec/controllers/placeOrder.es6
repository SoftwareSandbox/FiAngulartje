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

  describe('hasNoComposition', () => {

    it('should return true when compositionService has no composition', ()=> {
      mockito4js.doReturn(false).when(compositionServiceMock).hasComposition();
      
      let result = scope.hasNoComposition();
      
      expect(result).toBe(true);
    });

    it('should return false when compositionService has a composition', ()=> {
      mockito4js.doReturn(true).when(compositionServiceMock).hasComposition();
      
      let result = scope.hasNoComposition();
      
      expect(result).toBe(false);
    });

  });

  describe('placeOrder', ()=>{

    it('posts the composition to the PlaceOrderService', ()=> {
      mockito4js.doReturn(dummyComposition).when(compositionServiceMock).getComposition();

      scope.placeOrder();

      mockito4js.verify(placeOrderMock, mockito4js.once()).save(dummyComposition);
    });

  });

})
;
