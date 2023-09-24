import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  AddTodoScreen,
  MenuScreen,
  RandomUserScreen,
  TodoListScreen,
} from '@app/screens';
import {Screens} from '@app/utils';
import {navigationParams} from '@app/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigation = React.memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Screens.MENU}>
        <Stack.Screen
          name={Screens.MENU}
          component={MenuScreen}
          options={navigationParams}
        />
        <Stack.Screen
          name={Screens.TODO_LIST}
          component={TodoListScreen}
          options={navigationParams}
        />
        <Stack.Screen
          name={Screens.ADD_TODO}
          component={AddTodoScreen}
          options={navigationParams}
        />
        <Stack.Screen
          name={Screens.RANDOM_USER}
          component={RandomUserScreen}
          options={navigationParams}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
