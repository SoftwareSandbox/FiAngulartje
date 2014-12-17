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
    httpBackend
      .expect('GET','api/v1/categories/categories.json')
      .respond([
        {'id' : '1', 'name': 'Cheese', 'img': '/images/250px-Sandvich.png'},
        {'id' : '2', 'name': 'Ham', 'img': '/images/250px-Sandvich.png'}]
      );
  }));

  it('should GET all api/v1/categories', function () {
    var result = Categories.query();
    httpBackend.flush();
    expect(result.length).toBe(2);
  });

});
