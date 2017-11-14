import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can add guesses to state', () => {
        const guesses = [1,2,3];
        // I added the correctAnswer prop to Game so you can make sure of which is the correctAnswer
        // from tests so you don't need to guess it each time you do the tests
        const wrapper = shallow(<Game correctAnswer={5} />);
        const instance = wrapper.instance();
        
        // The first time, there won't be guesses
        console.log(instance.state.guesses);
        
        // Simulate an user input calling the guess function from the Game instance to guess with
        // each one of the guesses numbers
        guesses.forEach(item =>  instance.guess(item));

        // Because we are just testing we can add guesses to the state, 
        expect(instance.state.guesses.length).toEqual(guesses.length);
    });
});

//Tests
//can set state to create a new game?

//start with all the renders for all the componenets
//then start with the DOM(stateless) components