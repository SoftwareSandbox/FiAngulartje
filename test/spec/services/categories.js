'use strict';

describe('Service: categories', function () {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  var Categories,
      httpBackend;
  beforeEach(inject(function (_Categories_, $injector) {
    Categories = _Categories_;
    httpBackend = $injector.get('$httpBackend');
  }));

  it('should GET all api/v1/categories', function () {
    httpBackend
      .expectGET('api/v1/categories/categories.json')
      .respond([
        {'id' : '1', 'name': 'Cheese', 'img': '/images/250px-Sandvich.png'},
        {'id' : '2', 'name': 'Ham', 'img': '/images/250px-Sandvich.png'}]
      );
    var result = Categories.query();
    httpBackend.flush();
    
    expect(result.length).toBe(2);
  });

  it('should GET exactly one category by id', function () {
    httpBackend
      .expectGET('api/v1/categories/1.json')
      .respond({'id' : '1', 'name': 'Cheese'});
    var result = Categories.get({categoryId: '1'});
    httpBackend.flush();

    angular.equals(result, {'id' : '1', 'name': 'Cheese'});
  });

});
