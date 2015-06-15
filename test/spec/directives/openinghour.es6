'use strict';

describe('The openinghour directive', () => {

  let openinghours = [{
    'day': 1,
    'hours': [{'from': '09:00', 'until': '12:00'}]
  }];

  //mock out Openinghours service
  beforeEach(module('fiAngulartjeApp', ($provide) => {
    $provide.provider('Openinghours', {
      $get: () => {
        return {
          query: () => {
            return openinghours;
          }
        };
      }
    });
  }));

  // load the directives template as js via ng-html2js
  beforeEach(module('views/directives/openinghours.html'));

  let element,
    scope;

  beforeEach(inject(($rootScope, $compile) => {
    element = angular.element('<openinghours></openinghours>');
    element = $compile(element)($rootScope.$new());
    $rootScope.$digest();

    scope = element.isolateScope() || element.scope();
  }));

  it('html content gets built correctly', () => {
    let children = element.find('li');
    expect(children.length).toBe(1);

    let data = children.find('data');
    expect(data.attr('datedata')).toEqual('Mo 09:00-12:00');

    let spans = data.children();
    expect(spans.length).toBe(2);

    expect(spans[0].innerText).toEqual('Monday');
    expect(spans[1].innerText).toEqual('09:00-12:00');
  });

  it('translateDay is able to translate all days', () => {
    expect(scope.translateDay(1)).toEqual('Monday');
    expect(scope.translateDay(2)).toEqual('Tuesday');
    expect(scope.translateDay(3)).toEqual('Wednesday');
    expect(scope.translateDay(4)).toEqual('Thursday');
    expect(scope.translateDay(5)).toEqual('Friday');
    expect(scope.translateDay(6)).toEqual('Saturday');
    expect(scope.translateDay(7)).toEqual('Sunday');
  });

  it('formatHours works for single entry', () => {
    expect(scope.formatHours([{'from': '09:00', 'until': '12:00'}])).toEqual('09:00-12:00');
  });

  it('formatHours works for multiple entrie', () => {
    expect(scope.formatHours([{'from': '09:00', 'until': '12:00'}, {'from': '13:00', 'until': '17:00'}]))
      .toEqual('09:00-12:00, 13:00-17:00');
  });

  it('microdata creates correct microdata string', () => {
    expect(scope.microdata(openinghours[0])).toEqual('Mo 09:00-12:00');
  });

  it('openinghours should be put on scope', () => {
    expect(scope.openinghours.length).toBe(1);
    expect(scope.openinghours[0].day).toBe(1);
    expect(scope.openinghours[0].hours.length).toBe(1);
    expect(scope.openinghours[0].hours[0].from).toEqual('09:00');
    expect(scope.openinghours[0].hours[0].until).toEqual('12:00');
  });

});
