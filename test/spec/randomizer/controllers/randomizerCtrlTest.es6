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

    expect(RandomizerCtrl.composition).toBe(composition);
  });

  describe('randomize', () => {
    it('should broadcast startSlots', () => {
      RandomizerCtrl.randomize();

      mockito4js.verify($scope, mockito4js.once()).$broadcast('startSlots')
    });
  });

  describe('addTopping', () => {
    it('should add an empty object to toppings of composition', () => {
      RandomizerCtrl.composition.toppings = [];

      RandomizerCtrl.addTopping();

      expect(RandomizerCtrl.composition.toppings[0]).toEqual({});
    });
  });

  describe('addCondiment', () => {
    it('should add an empty object to condiments of composition', () => {
      RandomizerCtrl.composition.condiments = [];

      RandomizerCtrl.addCondiment();

      expect(RandomizerCtrl.composition.condiments[0]).toEqual({});
    });
  });

  describe('removeTopping', () => {
    it('should remove the last object from the toppings of composition given number of toppings is more than 1', () => {
      var firstTopping = {};
      RandomizerCtrl.composition.toppings = [firstTopping, {key: 'value'}];

      RandomizerCtrl.removeTopping();

      expect(RandomizerCtrl.composition.toppings.length).toBe(1);
      expect(RandomizerCtrl.composition.toppings[0]).toBe(firstTopping);
    });

    it('should not remove the last object from the toppings of composition given number of toppings is 1', () => {
      var firstTopping = {};
      RandomizerCtrl.composition.toppings = [firstTopping];

      RandomizerCtrl.removeTopping();

      expect(RandomizerCtrl.composition.toppings.length).toBe(1);
      expect(RandomizerCtrl.composition.toppings[0]).toBe(firstTopping);
    });
  });

  describe('removeCondiment', () => {
    it('should remove the last object from the condiments of composition given number of condiments is more than 1', () => {
      var firstCondiment = {};
      RandomizerCtrl.composition.condiments = [firstCondiment, {key: 'value'}];

      RandomizerCtrl.removeCondiment();

      expect(RandomizerCtrl.composition.condiments.length).toBe(1);
      expect(RandomizerCtrl.composition.condiments[0]).toBe(firstCondiment);
    });

    it('should not remove the last object from the condiments of composition given number of condiments is 1', () => {
      var firstCondiment = {};
      RandomizerCtrl.composition.condiments = [firstCondiment];

      RandomizerCtrl.removeCondiment();

      expect(RandomizerCtrl.composition.condiments.length).toBe(1);
      expect(RandomizerCtrl.composition.condiments[0]).toBe(firstCondiment);
    });
  });
});
