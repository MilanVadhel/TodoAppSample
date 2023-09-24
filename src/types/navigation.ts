import {Screens} from '@app/utils';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Todo} from './todo';

export type AppStackParamsList = {
  [Screens.MENU]: undefined;
  [Screens.TODO_LIST]: undefined;
  [Screens.ADD_TODO]: {
    todo?: Todo;
  };
  [Screens.RANDOM_USER]: undefined;
};

export const navigationParams: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
};
