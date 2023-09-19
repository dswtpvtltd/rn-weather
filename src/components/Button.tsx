import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {COLORS} from '../constants';
type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  testID?: string;
};
const Button = ({label, onPress, loading, testID}: Props) => {
  return (
    <TouchableOpacity testID="button" onPress={onPress}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            testID="button-loading"
            size={'large'}
            color={'red'}
          />
        ) : (
          <Text testID={testID} style={styles.label}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 19,
    color: COLORS.DARKER_GRAY,
  },
});
export default Button;
