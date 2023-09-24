import {BaseLayout} from '@app/components';
import {horizontalScale, scaledSize, verticalScale} from '@app/utils';
import React from 'react';
import {FlatList, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useTodoList} from './useTodoList';

export const TodoListScreen: React.FC = React.memo(() => {
  const {notes, addTodo, deleteTodo} = useTodoList();
  return (
    <BaseLayout>
      <View style={styles.mainContainer}>
        <FlatList
          data={notes}
          contentContainerStyle={styles.noteListContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onLongPress={deleteTodo(item)}
                onPress={addTodo(item)}
                key={index.toString()}
                style={[
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    marginBottom: index !== 14 ? 10 : 0,
                  },
                  styles.noteItemContainer,
                ]}>
                <Text style={styles.noteText}>{item.text}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity onPress={addTodo(undefined)}>
          <View style={styles.addNoteButtonContainer}>
            <Text style={styles.addNoteButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  noteListContainer: {
    padding: scaledSize(20),
  },
  noteItemContainer: {
    backgroundColor: 'white',
    padding: scaledSize(8),
    elevation: 5,
    borderRadius: scaledSize(4),
  },
  noteText: {
    fontWeight: '600',
    color: 'black',
  },
  addNoteButtonContainer: {
    width: scaledSize(50),
    height: scaledSize(50),
    backgroundColor: 'red',
    borderRadius: scaledSize(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: verticalScale(16),
    right: horizontalScale(16),
  },
  addNoteButtonText: {
    color: 'white',
    fontSize: scaledSize(24),
    includeFontPadding: false,
  },
});
