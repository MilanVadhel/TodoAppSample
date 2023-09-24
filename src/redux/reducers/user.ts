import {UsersActionType, UsersState} from '@app/types';
import {StateActions} from '@app/utils';
import {Reducer} from 'redux';

const initialState: UsersState = {
  users: [],
  apiStatus: 'IDLE',
  error: '',
};

export const usersReducers: Reducer<UsersState | undefined, UsersActionType> = (
  state: UsersState = initialState,
  action: UsersActionType,
) => {
  switch (action.type) {
    case StateActions.USERS_LOADING:
      return {
        ...state,
        apiStatus: 'LOADING',
      };
    case StateActions.USERS_LOAIDNG_SUCCESS:
      return {
        ...state,
        apiStatus: 'SUCCESS',
        users: [...action.payload.users],
      };
    case StateActions.USERS_LOADING_FAILED:
      return {
        ...state,
        apiStatus: 'FAILED',
        error: action.payload?.error,
      };
    default:
      return state;
  }
};
