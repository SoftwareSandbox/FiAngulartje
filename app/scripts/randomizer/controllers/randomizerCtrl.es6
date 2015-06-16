angular.module('randomizer')
  .controller('RandomizerCtrl', ['$scope', '$timeout', 'CompositionService', 'Toppings', 'Buns', 'Condiments', function ($scope, $timeout, CompositionService, Toppings, Buns, Condiments) {
    var ctrl = this;

    this.buns = Buns.query();
    this.toppings = Toppings.query();
    this.condiments = Condiments.query();
    this.composition;

    this.randomize = () => { $scope.$broadcast('startSlots'); };

    this.addTopping = () => { ctrl.composition.toppings.push({}); };

    this.addCondiment = () => { ctrl.composition.condiments.push({}); };

    this.removeTopping = () => { if(ctrl.composition.toppings.length > 1) ctrl.composition.toppings.pop(); };

    this.removeCondiment = () => { if(ctrl.composition.condiments.length > 1) ctrl.composition.condiments.pop(); };

    $scope.$watch(
      ()=> ctrl.composition,
      (newVal) => {
        if (newVal != undefined) {
          CompositionService.setComposition(newVal);
        }
      }
    );

    $scope.$watch(
      () => CompositionService.getComposition(),
      (newVal) => {
        ctrl.composition = newVal;
      }
    );

  }]);
