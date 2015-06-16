angular.module('randomizer').directive('slotArm', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $(element).click(function(){
        $(element).toggleClass('slot-arm-animate');

        setTimeout(function() {
          $(element).toggleClass('slot-arm-animate');
        }, 700);
      });
    }
  };
}]);
