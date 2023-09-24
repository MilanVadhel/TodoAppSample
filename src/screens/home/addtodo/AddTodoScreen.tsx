import {AppButton, BaseLayout} from '@app/components';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useAddTodo} from './useAddTodo';
import {horizontalScale, scaledSize} from '@app/utils';

export const AddTodoScreen: React.FC = React.memo(() => {
  const {saveTodo, setNoteText, noteText} = useAddTodo();

  return (
    <BaseLayout>
      <View style={styles.mainContainer}>
        <TextInput
          value={noteText}
          onChangeText={setNoteText}
          placeholderTextColor={'grey'}
          placeholder="Note"
          style={styles.inputContainer}
        />
        <AppButton onClick={saveTodo} title="Submit" />
      </View>
    </BaseLayout>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: scaledSize(4),
    borderWidth: scaledSize(1),
    borderColor: 'red',
    paddingHorizontal: horizontalScale(10),
    color: 'black',
    fontSize: scaledSize(16),
  },
});
