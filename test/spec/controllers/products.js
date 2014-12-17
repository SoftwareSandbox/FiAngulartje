'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  var ProductsCtrl,
    scope,
    category,
    $routeParams,
    $httpBackend;

  category = function () {
    return {'id' : '1', 'name': 'Cheese'};
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    $routeParams = $injector.get('$routeParams');
    $httpBackend = $injector.get('$httpBackend');
    
    $routeParams.catId = '1';
    $httpBackend
      .expectGET('api/v1/categories/1.json')
      .respond(category());
    
    ProductsCtrl = $controller('ProductsCtrl', {
      $scope: scope
    });
    
  }));

  it('should add the given category on the scope', function () {
    $httpBackend.flush();

    angular.equals(scope.category, category());
  });

});
