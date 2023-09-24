import {ActionCreator} from 'redux';
import {
  AddTodoActionType,
  BaseAction,
  DeleteTodoActionType,
  UpdateTodoActionType,
} from '@app/types';
import {StateActions} from '@app/utils';

export const AddTodoAction: ActionCreator<
  BaseAction<AddTodoActionType>
> = payload => ({
  type: StateActions.ADD_TODO,
  payload,
});

export const UpdateTodoAction: ActionCreator<
  BaseAction<UpdateTodoActionType>
> = payload => ({
  type: StateActions.UPDATE_TODO,
  payload,
});

export const DeleteTodoAction: ActionCreator<
  BaseAction<DeleteTodoActionType>
> = payload => ({
  type: StateActions.DELETE_TODO,
  payload,
});
