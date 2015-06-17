'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:openinghour
 * @description
 * # Openinghour
 */

angular.module('fiAngulartjeApp')
  .directive('openinghours', ['Openinghours', (Openinghours) => {
    return {
      templateUrl: 'views/directives/openinghours.html',
      restrict: 'E',
      controller: ['$scope', function ($scope) {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        $scope.formatHours = (hours) => {
          return hours
            .map((hour) => hour.from + '-' + hour.until)
            .join(', ');
        };

        $scope.translateDay = (dayNumber)=> {
          return days[dayNumber - 1];
        };

        $scope.microdata = (openinghour) => {
          let dayAbbreviation = $scope.translateDay(openinghour.day).substr(0, 2);
          let formattedFirstHoursOfDay = $scope.formatHours(openinghour.hours.slice(0, 1));
          return `${dayAbbreviation} ${formattedFirstHoursOfDay}`;
        };

        $scope.openinghours = Openinghours.query();
      }]
    };
  }]);
