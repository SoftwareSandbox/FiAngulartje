'use strict';

describe('Controller: MenuCtrl', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let MenuCtrl,
    scope,
    categories;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    categories = {
      query: () => {
        return [{'id': '1'}, {'id': '2'}];
      }
    };
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope,
      Categories: categories
    });
  }));

  it('should get a list of categories to put on the scope', () => {
    expect(scope.categories.length).toBe(2);
    expect(scope.categories[0]).toEqual({'id': '1'});
    expect(scope.categories[1]).toEqual({'id': '2'});
  });
});
