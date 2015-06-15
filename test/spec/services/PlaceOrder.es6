'use strict';

describe('Service: PlaceOrder', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let PlaceOrder,
    httpBackend,
    baseurl,
    orderedSandwich;

  beforeEach(inject(function (_PlaceOrder_, $injector) {
    PlaceOrder = _PlaceOrder_;
    httpBackend = $injector.get('$httpBackend');
    baseurl = $injector.get('Fiazard').baseurl;
    orderedSandwich = {
       "_id": "1",
       "bun": {
          "_id": "1",
          "name": "Italian",
          "description": "Foccacia",
          "price": "1"
       },
       "composition": [
          {
             "name": "Grilled Ham",
             "price": "0.10"
          },
          {
             "name": "Gouda",
             "price": "0.10"
          },
          {
             "name": "Walnuts",
             "price": "0.10"
          },
          {
             "name": "Honey",
             "price": "0.10"
          }
       ],
       "orderedOn": "20150513 10:29:30",
       "price": "1.40"
    };
  }));

  it('should POST a placeorder event to /api/ordering/placeorder', () => {
    httpBackend
      .expectPOST(`${baseurl}api/ordering/placeorder`, orderedSandwich)
      .respond(200, '');

    let result = PlaceOrder.save(orderedSandwich);
    httpBackend.flush();

    angular.equals(result, 200);
  });
});
