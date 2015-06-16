'use strict';

describe('Service: compositionService', () => {

  let Toppings = mockito4js.spy({
    lock: ()=> {
    }, unlock: ()=> {
    }
  });
  let Buns = mockito4js.spy({
    lock: ()=> {
    }, unlock: ()=> {
    }
  });
  let Condiments = mockito4js.spy({
    lock: ()=> {
    }, unlock: ()=> {
    }
  });

  // load the service's module
  beforeEach(module('fiAngulartjeApp', ($provide)=> {
    $provide.value('Buns', Buns);
    $provide.value('Toppings', Toppings);
    $provide.value('Condiments', Condiments);
  }));

  // instantiate service
  let LockingService;

  beforeEach(inject(function (_LockingService_) {
    LockingService = _LockingService_;
  }));


  it('lockBun calls service with bun object', ()=> {
    let bun = {name: 'Jos'};

    LockingService.lockBun(bun);

    mockito4js.verify(Buns, mockito4js.once()).lock(bun);
  });

  it('unLockBun calls service with bun object', ()=> {
    let bun = {name: 'Jos'};

    LockingService.unlockBun(bun);

    mockito4js.verify(Buns, mockito4js.once()).unlock(bun);
  });

  it('lockTopping calls service with topping object', ()=> {
    let topping = {name: 'Jos'};

    LockingService.lockTopping(topping);

    mockito4js.verify(Toppings, mockito4js.once()).lock(topping);
  });

  it('unLockTopping calls service with topping object', ()=> {
    let topping = {name: 'Jos'};

    LockingService.unlockTopping(topping);

    mockito4js.verify(Toppings, mockito4js.once()).unlock(topping);
  });

  it('lockCondiment calls service with condiment object', ()=> {
    let condiment = {name: 'Jos'};

    LockingService.lockCondiment(condiment);

    mockito4js.verify(Condiments, mockito4js.once()).lock(condiment);
  });

  it('unLockCondiment calls service with condiment object', ()=> {
    let condiment = {name: 'Jos'};

    LockingService.unlockCondiment(condiment);

    mockito4js.verify(Condiments, mockito4js.once()).unlock(condiment);
  });
});
