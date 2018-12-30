export default class ClassToMock {

    private privateField: string;

    public static publicStaticFunction(): string {
        return "public static function";
    }

    constructor(privateField?: string) {
        if(privateField)
            this.privateField = privateField;
    }

    public publicFunction(): string {
        return 'public function';
    }

    public publicFunction2(): string {
        return 'public function 2';
    }

    public publicFunctionReturnsInjectedValue() {
        return this.privateField;
    }

}