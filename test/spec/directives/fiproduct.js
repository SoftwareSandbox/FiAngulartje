'use strict';

describe('The fiproduct directive', function () {

  // load the directive's module
  beforeEach(module('fiAngulartjeApp'));
  
  // load the directives template as js via ng-html2js
  beforeEach(module('views/directives/fiproduct.html'));

  var element,
    scope,
    product;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
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
    element = $compile(element)(scope);
  }));

  it('should print out a sandwiches name, ingredients, sauces and price', inject(function () {
    scope.$apply(function(){
      scope.product = product;
    });
    expect(element.text()).toBe('Club cheese | [\"gouda cheese\",\"salad\",\"tomatoes\",\"egg\"] | [\"mayonaise\"] | 2');
  }));

});
