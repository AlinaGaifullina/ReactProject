import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

const CocktailCard = ({ cocktail, isButton, onClickButton }) => {
  return (
    <View style={styles.cocktailCard}>
      <Text style={styles.cocktailCardTitle}>{cocktail.name}</Text>
      <Image
        style={styles.cocktailCardImage}
        source={{ uri: cocktail.image }}
      />
      <Text style={styles.cocktailCardTextBold}>
        Type: <Text style={styles.cocktailCardTextReg}>{cocktail.cocktailType}</Text>
      </Text>
      <Text style={styles.cocktailCardTextBold}>
        Category: <Text style={styles.cocktailCardTextReg}>{cocktail.category}</Text>
      </Text>
      <Text style={styles.cocktailCardTextBold}>
        Glass type: <Text style={styles.cocktailCardTextReg}>{cocktail.glassType}</Text>
      </Text>
      <Text style={styles.cocktailCardTextBold}>
        Instructions: <Text style={styles.cocktailCardTextReg}>{cocktail.instructions}</Text>
      </Text>
      {isButton && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.deleteButton} onPress={() => onClickButton(cocktail.id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CocktailCard
