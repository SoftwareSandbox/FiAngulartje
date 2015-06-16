angular.module('randomizer').directive('slot', ['$timeout', 'LockingService', function ($timeout, LockingService) {
  const TYPE_CONDIMENTS = 'condiments';
  const TYPE_TOPPINGS = 'toppings';
  const TYPE_BUNS = 'buns';
  return {
    templateUrl: 'views/directives/slot.html',
    restrict: 'E',
    replace: true,
    scope: {
      toUpdate: '=',
      items: '=',
      delay: '=',
      type: '@'
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

      scope.toggleLocked = function () {
        if (scope.toUpdate.price !== undefined) {

          let functionToCall = scope.locked ? 'lock' : 'unlock';
          switch (scope.type) {
            case TYPE_BUNS:
              functionToCall += 'Bun';
              break;
            case TYPE_CONDIMENTS:
              functionToCall += 'Condiment';
              break;
            case TYPE_TOPPINGS:
              functionToCall += 'Topping';
              break;
          }

          LockingService[functionToCall](scope.toUpdate);
        }
      };
    }
  };
}]);
