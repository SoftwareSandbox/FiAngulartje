'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('MenuCtrl', function ($scope, $http) {
    $http.get('/api/v1/categories/categories.json').success(function(data) {
      $scope.categories = data;
    });
  });
