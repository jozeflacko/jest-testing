import ClassToMock from '../class-to-mock';

const classToMock = new ClassToMock("Hello Jozef");

// mocking public static function in a class (mock stay in this file);
ClassToMock.publicStaticFunction = jest.fn(()=>{
    return 'mocked value';
});
it('should return mocked value',()=>{
    expect(ClassToMock.publicStaticFunction()).toEqual('mocked value');
});

// mocking public function in a class (mock stay in this file);
classToMock.publicFunction = jest.fn(()=>{
    return "public function mocked";
});
it('should return mocked value',()=>{
    expect(classToMock.publicFunction()).toEqual("public function mocked");
});
