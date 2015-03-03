'use strict';

describe('Controller: ProductsCtrl', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let ProductsCtrl,
    scope,
    category, products, /* stubbed json */
    baseurl,
    $stateParams,
    $httpBackend;

  category = () => {
    return {'id': '1', 'name': 'Cheese'};
  };
  products = () => {
    return [{
      'id': '1',
      'categoryId': '1',
      'name': 'Club cheese',
      'composition': ['gouda cheese', 'salad', 'tomatoes', 'egg'],
      'sauces': ['mayonaise']
    },
      {'id': '2', 'categoryId': '1', 'name': 'Club Breeze', 'composition': ['brie', 'walnuts'], 'sauces': ['honey']}
    ];
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope, _$stateParams_, _$httpBackend_, _Fiazard_) => {
    scope = $rootScope.$new();
    $stateParams = _$stateParams_;
    $httpBackend = _$httpBackend_;
    // $httpBackend = $injector.get('$httpBackend');
    baseurl = _Fiazard_.baseurl;

    $stateParams.categoryId = '1';
    $httpBackend
      .expectGET(`${baseurl}api/v1/categories/1`)
      .respond(category());
    $httpBackend
      .expectGET(`${baseurl}api/v1/products?categoryId=1`)
      .respond(products());

    ProductsCtrl = $controller('ProductsCtrl', {
      $scope: scope
    });

  }));

  it('should add the given category to the scope', () => {
    $httpBackend.flush();

    angular.equals(scope.category, category());
  });

  it('should add the products for the given category to the scope', () => {
    $httpBackend.flush();

    angular.equals(scope.products, products());
  });

});
