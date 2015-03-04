'use strict';

describe('Service: Products', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let Products;
  beforeEach(inject((_Products_) => {
    Products = _Products_;
  }));

  it('should do something', () => {
    expect(!!Products).toBeTruthy();
  });

});
