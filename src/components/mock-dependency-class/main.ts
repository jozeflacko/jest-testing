import Dependency from './dependency';

export default class Main {
    
    private dependency: Dependency;
  
    constructor() {
        this.dependency = new Dependency();
    }

    public sayHello(): string {
        return this.dependency.returnHello();
    }

    public sayHi(): string {
        return this.dependency.returnHi();
    }
}