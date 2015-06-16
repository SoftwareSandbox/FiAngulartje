'use strict';

describe('Service: toppings', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let Toppings,
    httpBackend,
    baseurl;

  beforeEach(inject(function (_Toppings_, $injector) {
    Toppings = _Toppings_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));

  it('should GET all api/ordering/topping', () => {
    httpBackend
      .expectGET(`${baseurl}api/ordering/topping`)
      .respond([
        {'id': '1', 'name': 'Patrick', 'price': 1},
        {'id': '2', 'name': 'Rudy', 'price': 666.678}]
    );

    let result = Toppings.query();
    httpBackend.flush();

    expect(result.length).toBe(2);
  });

});
