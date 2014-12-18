'use strict';

describe('Service: categories', function () {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  var Categories,
      httpBackend,
      baseurl;
  beforeEach(inject(function (_Categories_, $injector) {
    Categories = _Categories_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));

  it('should GET all api/v1/categories', function () {
    httpBackend
      .expectGET(baseurl+'api/v1/categories')
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
      .expectGET(baseurl+'api/v1/categories/1')
      .respond({'id' : '1', 'name': 'Cheese'});
    var result = Categories.get({categoryId: '1'});
    httpBackend.flush();

    angular.equals(result, {'id' : '1', 'name': 'Cheese'});
  });

});
