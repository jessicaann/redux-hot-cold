import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
})
//should.not.be(zero)== !equal

//does it render?
//to test something from within topNav/infoModal, it has to be mounted
//does it display infoModal?
//does it toggle the state showInfoModal when TopNav gets clicked?
// does onNewGame callback fire?

//does toggleInfoModal work?
//does infoModal show when toggleinfomodal is called
//wrapper.find(infoModal) and then you count it, infoModal would be zero
//then after you call it, it shouldn't be zero