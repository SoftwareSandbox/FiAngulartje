'use strict';

describe('Service: compositionService', () => {

  // load the service's module
  beforeEach(module('fiAngulartjeApp'));

  // instantiate service
  let CompositionService;

  beforeEach(inject(function (_CompositionService_) {
    CompositionService = _CompositionService_;
  }));

  it('hasComposition returns true when composition', () => {
    CompositionService.setComposition({
      bun: {name: 'Ciabatta', price: 999.67},
      toppings: [{name: 'Mozarella', price: 1}],
      condiments: [{name: 'Mosterd', price: 5}]
    });

    let result = CompositionService.hasComposition();

    expect(result).toBe(true);
  });

  it('hasComposition returns false when no composition', () => {
    let result = CompositionService.hasComposition();

    expect(result).toBe(false);
  });

  it('getPrice returns null when there is no composition', () => {
    let result = CompositionService.getPrice();

    expect(result).toEqual(null);
  });

  it('getPrice calculates price', () => {
    CompositionService.setComposition({
      bun: {name: 'Ciabatta', price: 999.67},
      toppings: [{name: 'Mozarella', price: 1}],
      condiments: [{name: 'Mosterd', price: 5}]
    });

    let result = CompositionService.getPrice();

    expect(result).toEqual(1005.67);
  });

});
