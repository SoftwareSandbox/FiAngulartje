'use strict';

describe('Service: buns', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let Buns,
    httpBackend,
    baseurl;

  beforeEach(inject(function (_Buns_, $injector) {
    Buns = _Buns_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));

  it('should GET all api/ordering/bun', () => {
    httpBackend
      .expectGET(`${baseurl}api/ordering/bun`)
      .respond([
        {'id': '1', 'name': 'Hodor', 'price': 1},
        {'id': '2', 'name': 'Cersei', 'price': 666.678}]
    );

    let result = Buns.query();
    httpBackend.flush();

    expect(result.length).toBe(2);
  });

});
