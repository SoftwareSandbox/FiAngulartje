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

    let result = Buns.getAll();
    httpBackend.flush();

    expect(result.length).toBe(2);
  });

  it('can lock a bun', ()=> {
    let bun = {'id': '1', 'name': 'Hodor', 'price': 1};

    httpBackend.expectPOST(`${baseurl}api/ordering/bun/lock`, bun).respond(200, 'OK');
    Buns.lock({'id': '1', 'name': 'Hodor', 'price': 1});
    httpBackend.flush();
  });

  it('can unlock a bun', ()=> {
    let bun = {'id': '1', 'name': 'Hodor', 'price': 1};

    httpBackend.expectPOST(`${baseurl}api/ordering/bun/unlock`, bun).respond(200, 'OK');
    Buns.unlock({'id': '1', 'name': 'Hodor', 'price': 1});
    httpBackend.flush();
  });

});
