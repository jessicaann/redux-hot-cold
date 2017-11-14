import React from 'react';
import {shallow, mount} from 'enzyme';
import {toggleInfoModal} from '../_actions/actions'
import {InfoModal} from './info-modal';

describe('<InfoModal />', () => {
    it('Should render without crashing', () => {
        shallow(<InfoModal />);
    });
    it('Should fire onClose when clicked', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<InfoModal dispatch = {dispatch}/>);
        wrapper.find('.close').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    });
})