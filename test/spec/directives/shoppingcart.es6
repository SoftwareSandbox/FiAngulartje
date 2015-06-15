'use strict';

describe('The shoppingcart directive', () => {

  // load the directive's module
  beforeEach(module('fiAngulartjeApp'));

  // load the directives template as js via ng-html2js
  beforeEach(module('views/directives/shoppingcart.html'));

  let productStub = {
    'id': '1',
    'categoryId': '1',
    'name': 'Club cheese',
    'composition': [
      'gouda cheese',
      'salad',
      'tomatoes',
      'egg'
    ],
    'sauces': [
      'mayonaise'
    ],
    'type': 'Club',
    'price': 2.0
  };

  let item = {product: productStub, quantity: 1, remark: 'remark'};

  let shoppingcartMock = {
    items: [item],
    totalPrice: () => 10,
    clearItems: ()=> {
    }
  };

  //mock out ngDialog service
  beforeEach(() => {
    module(($provide) => {
      $provide.value('ShoppingCart', shoppingcartMock);
    });
  });

  let element;

  let getCell = (table, row, col) => {
    return angular.element(angular.element(table.find('tr')[row]).find('td')[col]);
  };

  describe('Readonly false', ()=> {

    beforeEach(inject(($rootScope, $compile) => {
      let initialScope = $rootScope.$new();

      element = '<shoppingcart readonly=false></shoppingcart>';
      element = $compile(element)(initialScope);

      initialScope.$digest();
    }));

    it('Correct html gets generated', inject(() => {
        expect(getCell(element, 1, 0).text()).toBe(productStub.name);
        expect(getCell(element, 1, 1).find('input').val()).toBe('' + item.quantity);
        expect(getCell(element, 1, 1).find('span').hasClass('ng-hide')).toBeTruthy();
        expect(getCell(element, 1, 2).find('input').val()).toEqual(item.remark);
        expect(getCell(element, 1, 2).find('span').hasClass('ng-hide')).toBeTruthy();
        expect(getCell(element, 1, 3).text()).toBe('€ ' + productStub.price);
        expect(getCell(element, 1, 4).text()).toBe('€ ' + productStub.price * item.quantity);
        expect(getCell(element, 2, 1).text()).toBe('€ 10');
        expect(getCell(element, 2, 2).hasClass('ng-hide')).toBeTruthy();
      })
    );
  });

  describe('Readonly true', ()=> {

    beforeEach(inject(($rootScope, $compile) => {
      let initialScope = $rootScope.$new();

      element = '<shoppingcart readonly=true></shoppingcart>';
      element = $compile(element)(initialScope);

      initialScope.$digest();
    }));

    it('Correct html gets generated', inject(() => {
        expect(getCell(element, 1, 0).text()).toBe(productStub.name);
        expect(getCell(element, 1, 1).find('input').hasClass('ng-hide')).toBeTruthy();
        expect(getCell(element, 1, 1).find('span').text()).toBe('' + item.quantity);
        expect(getCell(element, 1, 2).find('input').hasClass('ng-hide')).toBeTruthy();
        expect(getCell(element, 1, 2).find('span').text()).toEqual(item.remark);
        expect(getCell(element, 1, 3).text()).toBe('€ ' + productStub.price);
        expect(getCell(element, 1, 4).text()).toBe('€ ' + productStub.price * item.quantity);
        expect(getCell(element, 2, 1).hasClass('ng-hide')).toBeTruthy();
        expect(getCell(element, 2, 2).text()).toBe('€ 10');
      })
    );
  });

});
