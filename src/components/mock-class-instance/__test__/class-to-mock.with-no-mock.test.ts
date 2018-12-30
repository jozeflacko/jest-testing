import ClassToMock from '../class-to-mock';

const HELLO_JOZEF = "Hello Jozef";
const classToMock = new ClassToMock(HELLO_JOZEF);

it('should return original value - public function', ()=>{
    expect(classToMock.publicFunction()).toEqual('public function');
});

it('should return original value - public function 2', ()=>{
    expect(classToMock.publicFunction2()).toEqual('public function 2');
});

it('should return original value - ', ()=>{
    expect(classToMock.publicFunctionReturnsInjectedValue()).toEqual(HELLO_JOZEF);
});

it('should return original value - public static function', ()=>{
    expect(ClassToMock.publicStaticFunction()).toEqual('public static function');
});
