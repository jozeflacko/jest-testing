import Dependency from '../dependency';
import Main from '../main';

// mock just a single function
Dependency.prototype.returnHello = jest.fn(() => {
  return "Ahoj";
});

const main = new Main();

it('Mock only sayHello function but keep sayHi as it was', () => {
    expect(main.sayHello()).toEqual("Ahoj");
    expect(Dependency.prototype.returnHello).toHaveBeenCalledTimes(1);   
    expect(main.sayHi()).toEqual('Hi'); // because we first used automock to all module
});
