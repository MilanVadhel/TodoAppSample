import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export const BaseLayout = React.memo(({children}: PropsWithChildren) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'red'} animated />
      {children}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
