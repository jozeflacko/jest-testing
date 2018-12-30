import * as React from 'react';
import Child from './child-component';

interface State {
    msg: string;
    placeForHello: string;
}

export default class Main extends React.Component<{}, State> {
    constructor(props:{}) {
        super(props);
        this.state = {
             msg: "Hello Jozef",
             placeForHello: "",
        }
    }

    private onClicked(howManyTimesWasClicked: number) {
        this.setState({
            msg: "Hello Jozef, button was clicked "+howManyTimesWasClicked
        })
    }

    private writeHello = () => {
        const oldHello = this.state.placeForHello;
        this.setState({
            placeForHello: oldHello + 'Hello, '
        })
    };

    public render() {   
        return (
            <div className="main-component">
                <div className="hello">{this.state.placeForHello}</div>
                <button onClick={this.writeHello}>Click</button>
                <Child attrMsg="Ahoj" buttonLabel={this.state.msg} onClicked={this.onClicked}/>
            </div>
        ); 
    }
}