import {BaseLayout} from '@app/components';
import {fetchUsers} from '@app/redux';
import {horizontalScale, scaledSize, verticalScale} from '@app/utils';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const RandomUserScreen: React.FC = React.memo(() => {
  const apiStatus = useSelector(state => state.usersReducers.apiStatus);
  const users = useSelector(state => state.usersReducers.users);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <View style={styles.mainContainer}>
        {apiStatus === 'LOADING' && <ActivityIndicator size={'large'} />}
        {apiStatus === 'SUCCESS' && (
          <FlatList
            data={users}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.userListContainer}
            renderItem={({item}) => {
              return (
                <View style={styles.userItemContainer}>
                  <Image
                    source={{
                      uri: `${item.image}`,
                    }}
                    style={styles.userProfileImage}
                  />
                  <View style={styles.userProfileInfoContainer}>
                    <Text>Name : {item.name}</Text>
                    <Text>Status : {item.status}</Text>
                  </View>
                </View>
              );
            }}
          />
        )}
        {apiStatus === 'ERROR' && <Text>Error : ${error}</Text>}
      </View>
    </BaseLayout>
  );
});

const styles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'center'},
  userListContainer: {
    padding: scaledSize(8),
  },
  userItemContainer: {
    padding: scaledSize(8),
    borderRadius: scaledSize(8),
    elevation: 5,
    backgroundColor: 'white',
    marginBottom: verticalScale(8),
    flexDirection: 'row',
  },
  userProfileImage: {
    width: scaledSize(100),
    height: scaledSize(100),
    borderRadius: scaledSize(8),
  },
  userProfileInfoContainer: {
    flex: 1,
    marginStart: horizontalScale(8),
  },
});
