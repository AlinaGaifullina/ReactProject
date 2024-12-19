import { makeAutoObservable } from 'mobx';
import {ThemeTypes} from '../theme/types/ThemeTypes.ts';

export class HomeStore {

  theme: ThemeTypes = ThemeTypes.LIGHT;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(newTheme: ThemeTypes) {
    this.theme = newTheme;
  }

}
