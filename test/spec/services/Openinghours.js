'use strict';

describe('Service: Openinghours', function () {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  var Openinghours,
    httpBackend,
    baseurl;

  beforeEach(inject(function (_Openinghours_, $injector) {
    Openinghours = _Openinghours_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
  }));


  it('should GET all api/v1/openinghours', function () {
    httpBackend
      .expectGET(baseurl+'api/v1/openinghours')
      .respond([
        {
          "day":1,
          "hours":[{"from":"09:00","until":"12:00"},{"from":"12:30","until":"17:00"}]
        }]
    );
    var result = Openinghours.query();
    httpBackend.flush();

    expect(result.length).toBe(1);
  });

});
