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

      Buns = mockito4js.spy(_Buns_);
      mockito4js.doReturn([{name: 'Patrick', price: 5}]).when(Buns).query();

      Toppings = mockito4js.spy(_Toppings_);
      mockito4js.doReturn([{name: 'Rudy', price: 5}]).when(Toppings).query();

      Condiments = mockito4js.spy(_Condiments_);
      mockito4js.doReturn([{name: 'Theo', price: 5}]).when(Condiments).query();


      RandomizerCtrl = $controller('RandomizerCtrl', {
        $scope: $scope,
        CompositionService: CompositionService,
        Toppings: Toppings,
        Buns: Buns,
        Condiments: Condiments
      });

      $scope = mockito4js.spy($scope);
      $scope.$apply();
    });
  });

  it('Should get condiments, buns and toppings from services', () => {
    expect(RandomizerCtrl.toppings.length).toBe(1);
    expect(RandomizerCtrl.buns.length).toBe(1);
    expect(RandomizerCtrl.condiments.length).toBe(1);

    mockito4js.verify(Toppings, mockito4js.once()).query();
    mockito4js.verify(Buns, mockito4js.once()).query();
    mockito4js.verify(Condiments, mockito4js.once()).query();
  });

  it('should update the composition given composition on composition service changes', () => {
    var composition = {key: 'value'};
    CompositionService.setComposition(composition);

    $scope.$apply();

    expect($scope.composition).toBe(composition);
  });

  describe('randomize', () => {
    it('should broadcast startSlots', () => {
      RandomizerCtrl.randomize();

      mockito4js.verify($scope, mockito4js.once()).$broadcast('startSlots')
    });
  });

  describe('addTopping', () => {
    it('should add an empty object to toppings of composition', () => {
      $scope.composition.toppings = [];

      RandomizerCtrl.addTopping();

      expect($scope.composition.toppings[0]).toEqual({});
    });
  });

  describe('addCondiment', () => {
    it('should add an empty object to condiments of composition', () => {
      $scope.composition.condiments = [];

      RandomizerCtrl.addCondiment();

      expect($scope.composition.condiments[0]).toEqual({});
    });
  });
});
