import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

// @ts-ignore
const RoundedButton = ({ title, onPress, styles }) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
  <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
);
};
export default RoundedButton;
