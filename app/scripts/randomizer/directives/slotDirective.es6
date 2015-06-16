angular.module('randomizer').directive('slot', ['$timeout', function ($timeout) {
  return {
    templateUrl: 'views/directives/slot.html',
    restrict: 'E',
    replace: true,
    scope: {
      toUpdate: '=',
      items: '=',
      delay: '='
    },
    link: function (scope, element, attrs) {
      scope.locked = false;

      scope.$on('startSlots', function () {
        if (!scope.locked) {
          let slotMachine = $(element).find('.slot').first().slotMachine({
            active: 0,
            delay: 500
          });

          $timeout(function () {
            slotMachine.shuffle(5, function () {
              scope.$apply(function () {
                scope.toUpdate = scope.items[slotMachine.active];
              });
            });
          }, scope.delay);
        }
      });
    }
  };
}]);
