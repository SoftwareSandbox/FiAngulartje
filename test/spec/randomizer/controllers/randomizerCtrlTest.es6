describe('RandomizerCtrl', function () {
  var RandomizerCtrl,
    $scope,
    CompositionService,
    Toppings,
    Buns,
    Condiments;

  beforeEach(function () {
    module('fiAngulartjeApp');
    module('randomizer');

    inject(function ($controller, $rootScope, _CompositionService_, _Toppings_, _Buns_, _Condiments_) {
      $scope = $rootScope.$new();
      CompositionService = mockito4js.spy(_CompositionService_);
      Toppings = mockito4js.spy(_Toppings_);
      Buns = mockito4js.spy(_Buns_);
      Condiments = mockito4js.spy(_Condiments_);
      mockito4js.doReturn([{name: 'Rudy', price: 5}]).when(Toppings).query();
      mockito4js.doReturn([{name: 'Patrick', price: 5}]).when(Buns).query();
      mockito4js.doReturn([{name: 'Theo', price: 5}]).when(Condiments).query();

      RandomizerCtrl = $controller('RandomizerCtrl', {
        $scope: $scope,
        CompositionService: CompositionService,
        Toppings: Toppings,
        Buns: Buns,
        Condiments: Condiments
      });

      $scope = mockito4js.spy($scope);
    });
  });

  it('Should get condiments, buns and toppings from services', function () {
    expect(RandomizerCtrl.toppings.length).toBe(1);
    expect(RandomizerCtrl.buns.length).toBe(1);
    expect(RandomizerCtrl.condiments.length).toBe(1);

    mockito4js.verify(Toppings, mockito4js.once()).query();
    mockito4js.verify(Buns, mockito4js.once()).query();
    mockito4js.verify(Condiments, mockito4js.once()).query();

  });

  it('should update the composition given composition on composition service changes', function () {
    var composition = {key: 'value'};
    CompositionService.setComposition(composition);

    $scope.$apply();

    expect($scope.composition).toBe(composition);
  });

  describe('randomize', function () {
    it('should broadcast startSlots', function () {
      RandomizerCtrl.randomize();

      mockito4js.verify($scope, mockito4js.once()).$broadcast('startSlots')
    });

  })
});
