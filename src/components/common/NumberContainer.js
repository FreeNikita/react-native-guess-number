import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const NumberContainer = props => (
  <View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: THEME.COLOR.SECONDARY,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: THEME.COLOR.SECONDARY,
    fontSize: 22
  }
});

