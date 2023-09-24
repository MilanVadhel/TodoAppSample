import {AddTodoAction, UpdateTodoAction} from '@app/redux';
import {AppStackParamsList} from '@app/types';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

export const useAddTodo = () => {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState<string>('');
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();
  const {todo} = useRoute<RouteProp<AppStackParamsList>>()?.params ?? {};

  useEffect(() => {
    if (todo) {
      setNoteText(todo.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveTodo = useCallback(() => {
    if (!noteText) {
      return;
    }

    if (todo) {
      dispatch(
        UpdateTodoAction({
          _id: todo?._id,
          text: noteText,
        }),
      );
      navigation.canGoBack() && navigation.goBack();
      return;
    }

    const noteId = Math.random().toString();
    dispatch(
      AddTodoAction({
        _id: noteId,
        text: noteText,
      }),
    );
    navigation.canGoBack() && navigation.goBack();
  }, [dispatch, navigation, noteText, todo]);

  return {
    saveTodo,
    setNoteText,
    noteText,
  };
};
