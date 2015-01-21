'use strict';

describe('Directive: fiproduct', function () {

  // load the directive's module
  beforeEach(module('fiAngulartjeApp'));

  var element,
    scope,
    product;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    product = {
      "id": "1",
      "categoryId": "1",
      "name": "Club cheese",
      "composition": [
        "gouda cheese",
        "salad",
        "tomatoes",
        "egg"
      ],
      "sauces": [
        "mayonaise"
      ],
      "type": "Club",
      "price": 2.0
    };
  }));

  it('should make hidden element visible', inject(function ($compile) {
    scope.product = product;
    element = angular.element('<fiproduct product='+product+'></fiproduct>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe("Club cheese | [\"gouda cheese\", \"salad\", \"tomatoes\", \"egg\"] | [\"mayonaise\"] | 2.0");
  }));
});
