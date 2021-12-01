const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            // counter: 0 // this reducer will always starts at counter 0. and it is not realistic
            // counter should be the existing counter plus 1
            counter: state.counter + 1 // it is the existing state plus 1
            // this is the basic reducer.
        };
    };

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    };

    return state
}; 

const store = redux.createStore(counterReducer); 
// the counterReducer should be pass to the stoe so that the store will know which reducer is responsible for the change.

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber); // we did not execute counterSubscriber here, we just point at it

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});