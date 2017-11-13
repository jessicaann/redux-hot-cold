import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessSection />);
    });
    it('Should render feedback props', () => {
        const feedback = 'TestFeedback';
        const wrapper = shallow(<GuessSection feedback={feedback}/>);
        expect(wrapper.instance().props.feedback).toEqual(feedback);
    });
})