import {CocktailModel} from './CocktailModel.ts';
import {makeAutoObservable} from 'mobx';
import CocktailService from './CocktailService.ts';

export class CocktailStore {
    cocktailService;
    cocktail?: CocktailModel;
    cocktails: CocktailModel[] = [];

    isLoading: boolean;

    constructor() {
        makeAutoObservable(this);
        this.cocktailService = new CocktailService();
        this.isLoading = false;
    }

    getRandomCocktail = async () => {
        this.setLoadingState(true);
        this.cocktail = await this.cocktailService.getRandomCocktail();
        setTimeout(() => this.setLoadingState(false), 1000);
    };

    getRandomCocktails = async () => {
        this.setLoadingState(true);
        this.cocktails = await this.cocktailService.getRandomCocktails();
        setTimeout(() => this.setLoadingState(false), 1000);
    };

    private setLoadingState = (isLoading: boolean) => this.isLoading = isLoading;
}
