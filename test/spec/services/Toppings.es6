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

  it('can lock a topping', ()=> {
    let topping = {'id': '1', 'name': 'Hodor', 'price': 1};

    httpBackend.expectPOST(`${baseurl}api/ordering/topping/lock`, topping).respond(200, 'OK');
    Toppings.lock(topping);
    httpBackend.flush();
  });

  it('can unlock a topping', ()=> {
    let topping = {'id': '1', 'name': 'Hodor', 'price': 1};

    httpBackend.expectPOST(`${baseurl}api/ordering/topping/unlock`, topping).respond(200, 'OK');
    Toppings.unlock(topping);
    httpBackend.flush();
  });

});
