import gameReducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from '../_actions/actions';

describe('gameReducer', () => {
    //fake state
    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '_UNKNOWN'});
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            showInfoModal: false,
            correctAnswer: state.correctAnswer
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
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                correctAnswer: state.correctAnswer,
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
            const guesses = [{guess: 70, feedback: 'You\'re Ice Cold...'}, {guess: 40, feedback: 'You\'re Cold...'}, {guess: 20, feedback: 'You\'re Warm'}, {guess: 10, feedback: 'You\'re Hot!'}, {guess: 9, feedback: 'You got it!'}]
            for(let i=0; i < guesses.length; i++){
                let guess = guesses[i].guess;
                state = gameReducer(state, makeGuess(guess));
                expect(state.feedback).toEqual(guesses[i].feedback);
            };
        })
        it('Should add guess to guesses list', () => {
            //use a for loop and add many guesses in 
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
            //do a for loop and send varying data types (null, string, negativenum, etc)
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