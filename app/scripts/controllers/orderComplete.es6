'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:OrderCompleteCtrl
 * @description
 * # OrderCompleteCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('OrderCompleteCtrl', ['$scope', '$interval', '$state', ($scope, $interval, $state) => {
    $scope.remaining = 5;

    let stop = $interval(()=> {
      $scope.tick();
    }, 1000);

    $scope.tick = ()=> {
      if ($scope.remaining > 1) {
        $scope.remaining--;
      } else {
        $state.go('home');
        $interval.cancel(stop);
      }
    }
  }]);
