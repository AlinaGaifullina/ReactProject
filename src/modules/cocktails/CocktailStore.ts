import {CocktailModel} from './CocktailModel.ts';
import {makeAutoObservable} from 'mobx';
import CocktailService from './CocktailService.ts';

export class CocktailStore {
  cocktailService;
  cocktails: CocktailModel[] = [];
  localCocktails: CocktailModel[] = [];

  isLoading: boolean;

  constructor() {
    makeAutoObservable(this);
    this.cocktailService = new CocktailService();
    this.isLoading = false;
  }

  getRandomCocktails = async () => {
    this.setLoadingState(true);
    try {
      this.cocktails = await this.cocktailService.getRandomCocktails();
    } catch (error) {
    } finally {
      this.setLoadingState(false);
    }
  };

  // Получение всех коктейлей из хранилища
  getCocktailsFromLocal = async () => {
    this.setLoadingState(true);
    try {
      this.localCocktails = await this.cocktailService.getCocktailsFromLocal();
    } catch (error) {
    } finally {
      this.setLoadingState(false);
    }
  };

  // Удаление всех коктейлей
  removeAllCocktailsFromLocal = async () => {
    this.setLoadingState(true);
    await this.cocktailService.removeAllCocktailsFromLocal();
    this.localCocktails = []; // Очистка локального состояния коктейлей
    setTimeout(() => this.setLoadingState(false), 1000);
  };

  // Удаление коктейля по id
  removeCocktailById = async (id: string) => {
    this.setLoadingState(true);
    await this.cocktailService.removeCocktailById(id);
    this.localCocktails = this.localCocktails.filter(cocktail => cocktail.id !== id);
    setTimeout(() => this.setLoadingState(false), 1000);
  };

  private setLoadingState = (isLoading: boolean) => this.isLoading = isLoading;
}
