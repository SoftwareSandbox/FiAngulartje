describe('RandomizerCtrl', function() {
  var RandomizerCtrl,
    $scope,
    CompositionService;

  beforeEach(function(){
    module('fiAngulartjeApp');
    module('randomizer');

    inject(function($controller, $rootScope, _CompositionService_){
      $scope = $rootScope.$new();
      CompositionService = mockito4js.spy(_CompositionService_);
      RandomizerCtrl = $controller('RandomizerCtrl', {
        $scope: $scope,
        CompositionService: CompositionService
      });
    });
  });


  it('should update the composition given composition on composition service changes', function() {
    var composition = {key: 'value'};
    CompositionService.setComposition(composition);

    $scope.$apply();

    expect(RandomizerCtrl.composition).toBe(composition);
  });

  describe('randomize', function() {
    it('should create and put a randomized composition on the controller', function() {
      RandomizerCtrl.randomize();

      expect(RandomizerCtrl.buns.indexOf(RandomizerCtrl.composition.bun)).not.toBe(-1);
      expect(RandomizerCtrl.toppings.indexOf(RandomizerCtrl.composition.topping)).not.toBe(-1);
      expect(RandomizerCtrl.condiments.indexOf(RandomizerCtrl.composition.condiment)).not.toBe(-1);
    });

    it('should set the Composition on the CompositionService', function(){
      mockito4js.doNothing().when(CompositionService).setComposition(mockito4js.any(Object));

      RandomizerCtrl.randomize();

      mockito4js.verify(CompositionService, mockito4js.once()).setComposition(RandomizerCtrl.composition);
    });
  })
});
