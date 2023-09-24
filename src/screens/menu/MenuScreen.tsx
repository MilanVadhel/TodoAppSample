import {AppButton, BaseLayout} from '@app/components';
import {AppStackParamsList} from '@app/types';
import {Screens, horizontalScale} from '@app/utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

export const MenuScreen: React.FC = React.memo(() => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();
  const handleNavigation = useCallback(
    (type: 'CORE_REDUX' | 'CORE_REDUX_WITH_ASYNC_THUNK') => () => {
      if (type === 'CORE_REDUX') {
        navigation.navigate(Screens.TODO_LIST);
        return;
      }

      if (type === 'CORE_REDUX_WITH_ASYNC_THUNK') {
        navigation.navigate(Screens.RANDOM_USER);
        return;
      }
    },
    [navigation],
  );

  return (
    <BaseLayout>
      <View style={styles.mainContainer}>
        <AppButton
          title="Core Redux with Todo Sample"
          onClick={handleNavigation('CORE_REDUX')}
        />
        <AppButton
          title="Core Redux with Async Thunk"
          onClick={handleNavigation('CORE_REDUX_WITH_ASYNC_THUNK')}
        />
      </View>
    </BaseLayout>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
});
