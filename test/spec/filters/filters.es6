'use strict';

describe('Filter: parenswrap', () => {

  // load the controller's module
  beforeEach(module('fiAngulartjeApp'));

  let parenswrap;

  // Initialize the parenswrap filter
  beforeEach(inject(($filter) => {
    parenswrap = $filter('parenswrap');
  }));

  it('should surround the given string with parenthesis', ()=> {
    expect(parenswrap('iets')).toBe('(iets)');
  });

  it('should return empty string for null', ()=> {
    expect(parenswrap(null)).toBe('');
  });

  it('should return empty string for undefined', ()=> {
    expect(parenswrap(undefined)).toBe('');
  });
});
