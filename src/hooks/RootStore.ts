import React from 'react';
import {HomeStore} from '../modules/home/HomeStore.ts';


class RootStore {
  homeStore;
  constructor() {
    this.homeStore = new HomeStore();
  }
}
export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
