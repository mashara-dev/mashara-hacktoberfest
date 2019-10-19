import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CompassScreen from './screens/CompassScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CompassScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
