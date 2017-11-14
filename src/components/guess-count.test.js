import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount/>);
    });
    it('Should receive and render props', () => {
        const count = 15;
        const wrapper = shallow(<GuessCount count = {count}/>);
        expect(wrapper.find('span').text()).toEqual(`${count}`);
    });
})

//stateless/DOM components can only be tested on rendering stuff