import {AddUsersActionType, BaseAction} from '@app/types';
import {StateActions} from '@app/utils';
import {ActionCreator} from 'redux';

export const AddUsersLoadingAction: ActionCreator<
  BaseAction<AddUsersActionType>
> = payload => ({
  payload,
  type: StateActions.USERS_LOADING,
});

export const AddUsersSuccessAction: ActionCreator<
  BaseAction<AddUsersActionType>
> = payload => ({
  payload,
  type: StateActions.USERS_LOAIDNG_SUCCESS,
});

export const AddUsersFailedAction: ActionCreator<
  BaseAction<AddUsersActionType>
> = payload => ({
  payload,
  type: StateActions.USERS_LOADING_FAILED,
});
