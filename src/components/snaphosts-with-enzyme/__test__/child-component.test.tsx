import * as Enzyme from 'enzyme';
import * as React from 'react';
import Child, { IProps, IState, IOnClicked } from '../child-component';

describe('<Child />', () => {

    const label = "My Label";
    const attrMsg = "Attr msg";
    const onClickedMock: IOnClicked = jest.fn((times:number)=>{});
    const props: IProps = {
        buttonLabel: label,
        onClicked: onClickedMock,
        attrMsg: attrMsg
    };
    const component = Enzyme.shallow(<Child {...props} />);

    it('renders correctly component', () => {      
        expect(component).toMatchSnapshot();
    });
    /* 
    it('has expected props',()=>{
        expect(component.prop('buttonLabel')).toEqual(label);
        expect(component.props().onClickedMock).toBe(onClickedMock);
    });
    */
    
    it('has expected state howManyTimesWasButtonClicked to be 0', ()=>{ 
        expect((component.state() as IState).howManyTimesWasButtonClicked).toBe(0);
    });

    describe('Contains expected button',()=>{

        const button = component.find('button.button');

        it('has correct label __buttonLabel__',()=>{
            expect(button.text()).toBe(label);
        });

        it('with expected class',()=>{
            expect(button.hasClass('button')).toBeTruthy();
        });
        it('contains passed attrMsg in a data-attrMsg attribute',()=>{
            const attr = (button.prop('data-attrMsg'));
            expect(attr).toEqual(attrMsg);
        });

        describe('try to click on a button',()=> {
            beforeEach(()=>{
                button.simulate('click');
            });
            it('after 1 click passed function should been called',()=>{
                
                // function was called
                expect(onClickedMock).toHaveBeenCalledTimes(1);
                // state was updated: howManyTimesWasButtonClicked from 0 will change to 1
                expect((component.state() as IState).howManyTimesWasButtonClicked).toEqual(1);
            });
        });

    });
});