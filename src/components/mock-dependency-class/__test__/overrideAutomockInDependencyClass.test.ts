import Dependency from '../dependency';
import Main from '../main';

jest.mock('../dependency'); 
Dependency.prototype.returnHello = jest.fn(() => 'HELLO_YOU');

const main = new Main();

it('Because we provided mock implementation sayHello should expect HELLO_YOU result', () => {
    expect(Dependency).toHaveBeenCalledTimes(1);
    
    expect(Dependency.prototype.returnHello()).toEqual('HELLO_YOU');
    expect(main.sayHello()).toEqual('HELLO_YOU');
    
    expect(main.sayHi()).toBeUndefined(); // because we used automock to all module
});



