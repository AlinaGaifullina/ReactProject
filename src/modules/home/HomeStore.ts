import {makeAutoObservable} from 'mobx';
import {ThemeTypes} from '../theme/types/ThemeTypes.ts';
import {LangType} from '../lang/LangType.ts';

export class HomeStore {
  theme: ThemeTypes = ThemeTypes.LIGHT;
  lang: LangType = LangType.RU;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(newTheme: ThemeTypes) {
    this.theme = newTheme;
  }

  setLang(newLang: LangType) {
    this.lang = newLang;
  }

}
