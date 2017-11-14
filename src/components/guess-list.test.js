import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('Should render without crashing', () => {
    const guesses = [1, 2, 3, 4, 5, 6];    
    it('<GuessList />', () => {
        shallow(<GuessList guesses={guesses}/>);
    });
    it('Should render guesses', () => {
        const values = [1, 2, 3, 4, 5, 6];            
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
})