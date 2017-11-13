import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions';

describe('newGame', () => {
    it('Should return the action', () => {
        //I want to test if the number returned is between 1 and 100
        //0 < actions.correctAnswer && actions.correctAnswer <= 100
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer.exists);
    })
})

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 9;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    })
})

describe('toggleInfoModal', () => {
    it('Should return the action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    })
})