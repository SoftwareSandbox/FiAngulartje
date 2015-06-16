angular.module('randomizer')
  .controller('RandomizerCtrl', ['$scope', '$timeout', 'CompositionService', 'Toppings', 'Buns', 'Condiments', function ($scope, $timeout, CompositionService, Toppings, Buns, Condiments) {
    var ctrl = this;

    this.buns = Buns.query();
    this.toppings = Toppings.query();
    this.condiments = Condiments.query();

    $scope.composition;

    this.randomize = function () {
      $scope.$broadcast('startSlots');
    };

    this.addTopping = function () {
      $scope.composition.toppings.push({});
    };

    this.addCondiment = function () {
      $scope.composition.condiments.push({});
    };

    $scope.$watch(()=> $scope.composition, function (newVal) {
      if (newVal != undefined) {
        CompositionService.setComposition(newVal);
      }
    });

    $scope.$watch(
      function () {
        return CompositionService.getComposition()
      },
      function (newVal) {
        $scope.composition = newVal;
      }
    );

  }]);
