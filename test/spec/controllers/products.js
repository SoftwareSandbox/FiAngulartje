'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  var ProductsCtrl,
    scope,
    category, products, /* stubbed json */
    $routeParams,
    $httpBackend;

  category = function () {
    return {'id': '1', 'name': 'Cheese'};
  };
  products = function () {
    return [{'id': '1', 'categoryId': '1', 'name': 'Club cheese', 'composition': ['gouda cheese','salad','tomatoes','egg'], 'sauces':['mayonaise']},
            {'id': '2', 'categoryId': '1', 'name': 'Club Breeze', 'composition': ['brie','walnuts'], 'sauces':['honey']}
           ];
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
    $httpBackend
      .expectGET('api/v1/products?categoryId=1')
      .respond(products());
    
    ProductsCtrl = $controller('ProductsCtrl', {
      $scope: scope
    });
    
  }));

  it('should add the given category to the scope', function () {
    $httpBackend.flush();

    angular.equals(scope.category, category());
  });

  it('should add the products for the given category to the scope', function () {
    $httpBackend.flush();

    angular.equals(scope.products, products());
  });

});
