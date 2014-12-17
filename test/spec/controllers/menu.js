'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  var MenuCtrl,
    scope, 
    categories;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    categories = {
      query: function(){ return [{'id':'1'},{'id':'2'}]; }
    };
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope,
      Categories: categories
    });
  }));

  it('should get a list of categories to put on the scope', function () {
    expect(scope.categories.length).toBe(2);
    expect(scope.categories[0]).toEqual({'id' : '1'});
    expect(scope.categories[1]).toEqual({'id' : '2'});
  });
});
