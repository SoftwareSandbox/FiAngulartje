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
