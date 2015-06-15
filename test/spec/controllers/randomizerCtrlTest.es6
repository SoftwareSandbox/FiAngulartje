describe('RandomizerCtrl', function() {
  var randomizerCtrl;

  beforeEach(function(){
    module('fiAngulartjeApp');
    module('randomizer');

    inject(function($controller){
      randomizerCtrl = $controller('RandomizerCtrl', {});
    });
  });



  describe('randomize', function() {
    it('should create and put a randomized composition on the controller', function() {
      randomizerCtrl.randomize();

      expect(randomizerCtrl.buns.indexOf(randomizerCtrl.composition.bun)).not.toBe(-1);
      expect(randomizerCtrl.toppings.indexOf(randomizerCtrl.composition.topping)).not.toBe(-1);
      expect(randomizerCtrl.condiments.indexOf(randomizerCtrl.composition.condiment)).not.toBe(-1);
    });
  })
});
