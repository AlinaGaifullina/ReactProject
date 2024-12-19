import {Text, View} from 'react-native';

// @ts-ignore
const TextCard = ({ text, styles }) => {
  return (
    <View style={styles.textCard}>
      <Text style={styles.textCardTitle}>{text}</Text>
    </View>
);
};

export default TextCard;
