'use strict';

describe('The fiproduct directive', function () {

  // load the directive's module
  beforeEach(module('fiAngulartjeApp'));
  
  // load the directives template as js via ng-html2js
  beforeEach(module('views/directives/fiproduct.html'));

  var element,
    $scope,
    product;

  beforeEach(inject(function ($rootScope, $compile) {
    product = {
      'id': '1',
      'categoryId': '1',
      'name': 'Club cheese',
      'composition': [
        'gouda cheese',
        'salad',
        'tomatoes',
        'egg'
      ],
      'sauces': [
        'mayonaise'
      ],
      'type': 'Club',
      'price': 2.0
    };
    element = angular.element('<fiproduct product=product></fiproduct>');
    $compile(element)($rootScope.$new());
    $rootScope.$apply(function(){
      $rootScope.product = product;
    });
    $rootScope.$digest();

    $scope = element.isolateScope();
  }));

  it('should print out a sandwiches name, ingredients, sauces and price', inject(function () {
    expect($scope.ingredients).toBe('gouda cheese, salad, tomatoes, egg, mayonaise');
  }));

});
