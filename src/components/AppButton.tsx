import {scaledSize, verticalScale} from '@app/utils';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface AppButtonProps {
  onClick: () => void;
  title: string;
}

export const AppButton: React.FC<AppButtonProps> = React.memo(
  ({onClick, title}) => {
    return (
      <TouchableOpacity onPress={onClick} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'red',
    padding: scaledSize(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaledSize(4),
    marginTop: verticalScale(8),
    width: '100%',
  },
  buttonText: {
    fontSize: scaledSize(16),
    color: 'white',
    fontWeight: '800',
  },
});
