import {StateActions} from '@app/utils';
import {Todo} from '../todo';
import {UsersListResponse} from './user';

export interface BaseAction<T> {
  type: StateActions;
  payload: T;
}

export interface AddTodoActionType extends BaseAction<Todo> {}
export interface UpdateTodoActionType extends BaseAction<Todo> {}
export interface DeleteTodoActionType extends BaseAction<Pick<Todo, '_id'>> {}

export interface AddUsersActionType extends BaseAction<UsersListResponse> {}

export type TodoActionType = AddTodoActionType &
  UpdateTodoActionType &
  DeleteTodoActionType;

export type UsersActionType = AddUsersActionType;
