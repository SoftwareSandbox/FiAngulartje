'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:openinghour
 * @description
 * # Openinghour
 */

angular.module('fiAngulartjeApp')
  .directive('openinghours',['Openinghours', function (Openinghours) {
    return {
      templateUrl: 'views/directives/openinghours.html',
      restrict: 'E',
      controller: function($scope) {
        var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

        $scope.formatHours = function(hours){

          return hours.map(function(hour){

            return hour.from + '-' + hour.until;
          }).join(', ');
        };

        $scope.translateDay = function (dayNumber){
          return days[dayNumber-1];
        };

        $scope.microdata = function(openinghour){
          var result = $scope.translateDay(openinghour.day).substr(0,2);
          result += ' ' + $scope.formatHours(openinghour.hours.slice(0,1));
          return result;
        }

        $scope.openinghours = Openinghours.query();
      }
    };
  }]);
