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
        const instance = wrapper.instance();
        console.log(wrapper);
        expect(instance.props.count).toEqual(count);
        expect(wrapper.find('span').text()).toEqual(`${count}`);
    });
})