import * as React from 'react';

export interface IOnClicked {
    (howManyTimesWasButtonClicked: number): void
}
export interface IProps {
    buttonLabel: string,
    onClicked: IOnClicked;
    attrMsg: string;
}
export interface IState {
    howManyTimesWasButtonClicked: number;
}
export default class Child extends React.Component<IProps, IState> {    
    constructor(props: IProps) {
        super(props);
        this.state = {
            howManyTimesWasButtonClicked: 0
        };
    }
    private buttonClickEvent = (event: React.MouseEvent):void => {
        const howManyTimesWasButtonClicked = this.state.howManyTimesWasButtonClicked+1;        
        this.setState({ 
            howManyTimesWasButtonClicked
        });
        this.props.onClicked(howManyTimesWasButtonClicked);
    }   
    public render() { 
        return (
            <div className="child-component">
                <h1>Main Component</h1>
                <button 
                    className="button"  
                    data-attrMsg={this.props.attrMsg}
                    onClick={this.buttonClickEvent}>
                        {this.props.buttonLabel}
                </button>
            </div>
        ); 
    }
}
