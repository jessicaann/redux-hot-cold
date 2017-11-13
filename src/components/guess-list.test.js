import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('Should render without crashing', () => {
    const guesses = [1, 2, 3, 4, 5, 6];    
    it('<GuessList />', () => {
        shallow(<GuessList guesses={guesses}/>);
    });
    it('Should render guesses', () => {
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        expect(wrapper.instance().props.guesses.length).toEqual(guesses.length);
    });
})