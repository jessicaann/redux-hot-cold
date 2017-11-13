import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Should fire onGuess function on form submit', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess = {callback}/>);
        const value = 1;
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(`${value}`);
    });
})