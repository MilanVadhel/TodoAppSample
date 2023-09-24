import {usersReducers} from './../reducers/user';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {todoReducers} from '../reducers';
import thunkMiddleware from 'redux-thunk';
// (1) Custom Old approach with enhancer without apply middleware.

/* const middlewareEnhancer = (createStore: typeof createStore) => {
  return (
    reducer: Reducer<TodoState, TodoActionType>,
    state?: TodoState,
    enhancer?: StoreEnhancer,
  ): Store<TodoState, TodoActionType> => {
    const store: Store = createStore(reducer, state, enhancer);
    const newDispatch: Dispatch<TodoActionType> = (action: TodoActionType) => {
      console.log('Befor Action -> ', store.getState());
      const result = store.dispatch(action);
      console.log('After Action -> ', store.getState());
      return result;
    };

    return {
      ...store,
      dispatch: newDispatch,
    };
  };
}; */

/*

(2) Custom Middleware with old approach nested functions.

function loggerMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      console.log('Befor Action -> ', storeAPI.getState());
      const result = next(action);
      console.log('After Action -> ', storeAPI.getState());
      return result;
    };
  };

  const middlewareEnhancer = applyMiddleware(loggerMiddleware);

} */

/*
 (3) Custom Middleware with new approach with curring function with appl

  const loggerMiddleware = storeAPI => next => action => {
    console.log('Befor Action -> ', storeAPI.getState());
    const result = next(action);
    console.log('After Action -> ', storeAPI.getState());
    return result;
  };

  const middlewareEnhancer = applyMiddleware(loggerMiddleware);

*/

/**
 * Middleware to write async operations called thunk middleware.
 */
/*const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
};

  const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
*/

/**
 * We no need to write the thunk middleware by our own self, because redux provides us.
 */
const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const rootReducer = combineReducers({
  todoReducers,
  usersReducers,
});
export const store = createStore(rootReducer, middlewareEnhancer);
