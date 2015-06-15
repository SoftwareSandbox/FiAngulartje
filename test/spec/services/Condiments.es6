'use strict';

describe('Service: condiments', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let Condiments,
    httpBackend,
    baseurl;

  beforeEach(inject(function (_Condiments_, $injector) {
    Condiments = _Condiments_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));

  it('should GET all api/ordering/condiment', () => {
    httpBackend
      .expectGET(`${baseurl}api/ordering/condiment`)
      .respond([
        {'id': '1', 'name': 'Tyrion', 'price': 1},
        {'id': '2', 'name': 'Cersei', 'price': 666.678}]
    );

    let result = Condiments.query();
    httpBackend.flush();

    expect(result.length).toBe(2);
  });

});
