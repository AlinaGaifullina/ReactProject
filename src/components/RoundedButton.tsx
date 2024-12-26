import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';

// @ts-ignore
const RoundedButton = ({ title, onPress, styles, iconName }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>{title}</Text>
          <Icon name={iconName} size={20} color={styles.buttonText.color} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RoundedButton;
