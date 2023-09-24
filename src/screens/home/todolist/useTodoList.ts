import {DeleteTodoAction} from '@app/redux';
import {AppStackParamsList, Todo} from '@app/types';
import {Screens} from '@app/utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useTodoList = () => {
  const notes = useSelector(state => state?.todos as Todo[]);
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();
  const dispatch = useDispatch();

  const addTodo = useCallback(
    (todo?: Todo) => () => {
      navigation.navigate(Screens.ADD_TODO, {
        todo: todo,
      });
    },
    [navigation],
  );

  const deleteTodo = useCallback(
    (todo: Todo) => () => {
      if (!todo) {
        return;
      }
      dispatch(DeleteTodoAction(todo));
    },
    [dispatch],
  );

  return {
    addTodo,
    notes,
    deleteTodo,
  };
};
