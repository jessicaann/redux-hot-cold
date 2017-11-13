import gameReducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from '../_actions/actions';

describe('gameReducer', () => {
    //fake state
    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '_UNKNOWN'});
        state.correctAnswer = 9;
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            showInfoModal: false,
            correctAnswer: 9
            //unable to test correctAnswer because the random numbers won't match
        });
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
    describe('newGame', () => {
        it('Should reset to initial state', () => {
            let state;
            state = gameReducer(state, newGame());
            state.correctAnswer = 9;
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                correctAnswer: 9,
                showInfoModal: false
            });
        });
    });
    describe('makeGuess', () => {
        it('Should assess guess to determine feedback', () => {
            let state = {
                guesses: [],
                feedback: 'Make your guess!',
                showInfoModal: false,
                correctAnswer: 9
            };
            let guess = 10;
            state = gameReducer(state, makeGuess(guess));
            expect(state.feedback).toEqual('You\'re Hot!');
            //I don't think this is right because what if you change that phrase and forget to change the test?
        })
        it('Should add guess to guesses list', () => {
            let state = {
                guesses: [4,5,78,10],
                feedback: 'Make your guess!',
                showInfoModal: false,
                correctAnswer: 9
            };
            let guess = 88;
            state = gameReducer(state, makeGuess(guess));
            expect(state).toEqual({
                guesses: [4,5,78,10,guess],
                feedback: 'You\'re Ice Cold...',//should I create a feedback var to pass in?
                showInfoModal: false,
                correctAnswer: 9
            });
        })
        it('Should reject non-number guesses', () => {
            let state;
            let guess = 'guess';
            state = gameReducer(state, makeGuess(guess));
            expect(state.feedback).toEqual('Please enter a valid number');
        })

    })
    describe('toggleInfoModal', () => {
        it('Should change showInfoModal to opposite value', () => {
            let state = {
                guesses: [],
                feedback: 'Make your guess!',
                correctAnswer: 9,
                showInfoModal: false
            }
            state = gameReducer(state, toggleInfoModal());
            expect(state.showInfoModal).toEqual(true);
        });
    });
});