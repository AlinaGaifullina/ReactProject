import {observer} from 'mobx-react-lite';
import {useRootStore} from '../hooks/useRootState.ts';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles';

export const HomeScreen = observer(
  () => {

    const {cocktailStore} = useRootStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async function() {
        await cocktailStore.getRandomCocktails();
        setIsLoading(false);
        console.log(cocktailStore.cocktails);
      })();
    }, [cocktailStore]);


    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.rootView}>
          <Text style={styles.titleText}> (: Coctails :) </Text>
          {isLoading ? (
            <Text style={styles.titleText}> Loading... </Text>
          ) : (
            cocktailStore.cocktails && cocktailStore.cocktails.length > 0 ? (
                cocktailStore.cocktails.map(cocktail => (
                  <View style={styles.cocktailCard} key={cocktail.name}>
                    <Text style={styles.cocktailCardTitle}>{cocktail.name}</Text>
                    <Image
                      style={styles.cocktailCardImage}
                      source={{uri: cocktail.image}}
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
                  </View>
                ))
              ) : (
                <Text style={styles.cocktailCardTextReg}>No cocktails available</Text>
              )
            )
          }
        </ScrollView>
      </SafeAreaView>
    );
  },
);
