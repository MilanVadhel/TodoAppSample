import axios from 'axios';
import {
  AddUsersFailedAction,
  AddUsersLoadingAction,
  AddUsersSuccessAction,
} from '../actions/user';
import {Dispatch} from 'redux';

export const fetchUsers = async (dispatch: Dispatch, _: any) => {
  try {
    dispatch(AddUsersLoadingAction());
    const usresListResponse = await axios.get(
      'https://rickandmortyapi.com/api/character',
    );
    dispatch(
      AddUsersSuccessAction({
        users: usresListResponse.data.results,
      }),
    );
  } catch (error) {
    dispatch(
      AddUsersFailedAction({
        error: (error as Error).message,
      }),
    );
  }
};
