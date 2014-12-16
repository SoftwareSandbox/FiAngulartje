'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  var MenuCtrl,
    scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    httpBackend = $injector.get('$httpBackend');
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
    httpBackend
      .expect('GET','/api/v1/categories/categories.json')
      .respond([
        {'id' : '1', 'name': 'Cheese', 'img': '/images/250px-Sandvich.png'},
        {'id' : '2', 'name': 'Ham', 'img': '/images/250px-Sandvich.png'}]
      );
  }));

  it('should get a list of categories to put on the scope', function () {
    httpBackend.flush();
    expect(scope.categories.length).toBe(2);
    expect(scope.categories[0]).toEqual({'id' : '1', 'name': 'Cheese', 'img': '/images/250px-Sandvich.png'});
  });
});
