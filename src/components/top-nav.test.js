import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';
import {NEW_GAME, newGame, toggleInfoModal} from '../_actions/actions';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should call onInfo function', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch} />);
        wrapper.find('.what').simulate('click', {preventDefault: ()=>{}});
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    });
    it('Should call onNewGame function', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch} />);
        wrapper.find('.new').simulate('click', {preventDefault: ()=> {}});
        expect(dispatch).toHaveBeenCalled();
        // Just check type, because payload is random
        expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
    });
})

