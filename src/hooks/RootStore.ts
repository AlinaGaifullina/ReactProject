import React from 'react';
import {CocktailStore} from '../modules/cocktails/CocktailStore.ts';


class RootStore {
  cocktailStore;

  constructor() {
    this.cocktailStore = new CocktailStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
