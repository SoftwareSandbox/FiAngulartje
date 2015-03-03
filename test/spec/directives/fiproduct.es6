'use strict';

describe('The fiproduct directive', () => {

  // load the directive's module
  beforeEach(module('fiAngulartjeApp'));

  // load the directives template as js via ng-html2js
  beforeEach(module('views/directives/fiproduct.html'));

  let scope;

  beforeEach(inject(($rootScope, $compile) => {
    let productStub = {
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

    let initialScope = $rootScope.$new();
    initialScope.product = productStub;

    let element = '<fiproduct product=product></fiproduct>';
    element = $compile(element)(initialScope);

    initialScope.$digest();
    scope = element.isolateScope();
  }));

  it('should print out a sandwiches name, ingredients, sauces and price', inject(() => {
    expect(scope.ingredients).toBe('gouda cheese, salad, tomatoes, egg, mayonaise');
  }));

});
