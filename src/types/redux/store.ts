import {BaseApiResponse} from '../api';
import {Todo} from '../todo';
import {User} from './user';

export interface BaseState extends BaseApiResponse {}

export interface TodoState extends BaseState {
  todos: Todo[];
}

export interface UsersState extends BaseState {
  users: User[];
}
