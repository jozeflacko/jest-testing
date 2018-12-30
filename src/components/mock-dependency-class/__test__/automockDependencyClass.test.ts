import Dependency from '../dependency';
import Main from '../main';

jest.mock('../dependency'); // mocking constuctor of class. 
 
const main = new Main();
it('In this test we auto-mocked NestedClass. All methods from this class will by default return undefined', () => {
    expect(Dependency).toHaveBeenCalledTimes(1);        
    expect(main.sayHello()).toBeUndefined();
    expect(main.sayHi()).toBeUndefined();
});
