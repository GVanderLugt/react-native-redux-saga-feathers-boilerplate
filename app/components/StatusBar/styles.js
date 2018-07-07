import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  statusBar: {
    height: (Platform.OS === 'ios') ? 20 : 0,
  },
});
