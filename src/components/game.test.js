import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});

//Tests
//can set state to create a new game?

//start with all the renders for all the componenets
//then start with the DOM(stateless) components