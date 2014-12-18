'use strict';

describe('Service: Products', function () {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  var Products;
  beforeEach(inject(function (_Products_) {
    Products = _Products_;
  }));

  it('should do something', function () {
    expect(!!Products).toBe(true);
  });

});
