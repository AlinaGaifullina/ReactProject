import {observer} from 'mobx-react-lite';
import {useRootStore} from '../hooks/useRootState.ts';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/styles';
import CocktailCard from '../components/CocktailCard';
import RoundedButton from '../components/RoundedButton';

export const HomeScreen = observer(
  () => {

    const {cocktailStore} = useRootStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async function() {
        await cocktailStore.getRandomCocktails();
        await cocktailStore.getCocktailsFromLocal();
        setIsLoading(false);
        console.log(cocktailStore.cocktails);
      })();
    }, [cocktailStore]);

    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.rootView}>
          <Text style={styles.titleText}> (: Cocktails :) </Text>
          {isLoading ? (
            <Text style={styles.smallTitleText}> Loading... </Text>
          ) : (
            cocktailStore.cocktails && cocktailStore.cocktails.length > 0 ? (
              cocktailStore.cocktails.map(cocktail => (
                <CocktailCard
                  key={cocktail.name}
                  cocktail={cocktail}
                  isButton={false}
                  onClickButton={(id: string) => console.log(`Action taken on cocktail with id: ${id}`)}
                />
              ))
            ) : (
              <View>
                <Text style={styles.smallTitleText}>No cocktails available</Text>
                <RoundedButton title="Try to load" onPress={cocktailStore.getRandomCocktails} />
              </View>
            )
          )
          }
          <View>
            <Text style={styles.titleText}>Cocktail Storage:</Text>
            {cocktailStore.localCocktails ? (
              cocktailStore.localCocktails.map(cocktail => (
                <CocktailCard
                  key={cocktail.name}
                  cocktail={cocktail}
                  isButton={true}
                  onClickButton={(id: string) => cocktailStore.removeCocktailById(id)}
                    />
              ))
            ) : (
              <Text style={styles.cocktailCardTextBold}>Storage is empty</Text>
            )}
          </View>
          <RoundedButton title="Clear Storage" onPress={cocktailStore.removeAllCocktailsFromLocal} />
        </ScrollView>
      </SafeAreaView>
    );
  },
);
