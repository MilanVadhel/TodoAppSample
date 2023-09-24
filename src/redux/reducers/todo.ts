import {Todo, TodoActionType, TodoState} from '@app/types';
import {StateActions} from '@app/utils';
import {Reducer} from 'redux';

const initialState: TodoState = {
  todos: [],
};

export const todoReducers: Reducer<TodoState | undefined, TodoActionType> = (
  state: TodoState = initialState,
  action: TodoActionType,
) => {
  switch (action.type) {
    case StateActions.ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case StateActions.UPDATE_TODO:
      const updatedTodos = [...state.todos].map((todo: Todo) => {
        if (todo._id === action.payload._id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        } else {
          return todo;
        }
      });
      return {
        todos: updatedTodos,
      };
    case StateActions.DELETE_TODO:
      const remainingTodos = [...state.todos].filter(
        (todo: Todo) => todo._id !== action.payload._id,
      );
      return {
        todos: remainingTodos,
      };
    default:
      return state;
  }
};
