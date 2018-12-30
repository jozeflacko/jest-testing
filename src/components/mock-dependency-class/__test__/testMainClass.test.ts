import Main from '../main';
 
const main = new Main();

it('This is a simple test that methods in a class TestedClass will return values', () => {    
    expect(main.sayHello()).toEqual('Hello');
    expect(main.sayHi()).toEqual('Hi');
});
