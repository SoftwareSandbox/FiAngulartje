'use strict';

describe('Service: categories', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let Categories,
    httpBackend,
    baseurl;

  beforeEach(inject(function (_Categories_, $injector) {
    Categories = _Categories_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));

  it('should GET all api/v1/categories', () => {
    httpBackend
      .expectGET(`${baseurl}api/v1/categories`)
      .respond([
        {'id': '1', 'name': 'Cheese', 'img': '/images/250px-Sandvich.png'},
        {'id': '2', 'name': 'Ham', 'img': '/images/250px-Sandvich.png'}]
    );

    let result = Categories.query();
    httpBackend.flush();

    expect(result.length).toBe(2);
  });

  it('should GET exactly one category by id', () => {
    httpBackend
      .expectGET(`${baseurl}api/v1/categories/1`)
      .respond({'id': '1', 'name': 'Cheese'});

    let result = Categories.get({categoryId: '1'});
    httpBackend.flush();

    angular.equals(result, {'id': '1', 'name': 'Cheese'});
  });

});
