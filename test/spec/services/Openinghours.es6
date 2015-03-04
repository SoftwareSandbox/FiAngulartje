'use strict';

describe('Service: Openinghours', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let Openinghours,
    httpBackend,
    baseurl;

  beforeEach(inject((_Openinghours_, $injector) => {
    Openinghours = _Openinghours_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));


  it('should GET all api/v1/openinghours', () => {
    httpBackend
      .expectGET(baseurl + 'api/v1/openinghours')
      .respond([
        {
          "day": 1,
          "hours": [{"from": "09:00", "until": "12:00"}, {"from": "12:30", "until": "17:00"}]
        }]
    );

    let result = Openinghours.query();
    httpBackend.flush();

    expect(result.length).toBe(1);
  });

});
