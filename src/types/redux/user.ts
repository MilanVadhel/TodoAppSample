import {BaseState} from './store';

export interface User {
  name: string;
  status: string;
  image: string;
}

export interface UsersListResponse extends BaseState {
  users: User[];
}
