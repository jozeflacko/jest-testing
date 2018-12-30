import * as Enzyme from 'enzyme';
import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import Main from '../main-component';

Enzyme.configure({ adapter: new Adapter() });

describe('<Main />', () => {
    const component = Enzyme.shallow(<Main />);
    
    it('renders correctly  component', () => {       
        expect(component).toMatchSnapshot();
    });

    it('child component is rendered as shallow',()=>{
        expect(component.find('Child').length).toBe(1);
    });

    console.log(component.find('Child').get(0));

});
