import {CocktailModel} from './CocktailModel.ts';
import CocktailRepository from './CocktailRepository.ts';
import CocktailLocalRepository from './localStorage/CocktailLocalRepository.ts';

export default class CocktailService {
  cocktailRepository;
  cocktailLocalRepository;

  constructor() {
    this.cocktailRepository = new CocktailRepository();
    this.cocktailLocalRepository = new CocktailLocalRepository()
  }

  getRandomCocktails = async ():Promise<CocktailModel[]> => {
    const res = await this.cocktailRepository.getRandomCocktails();
    await this.cocktailLocalRepository.setCocktails(res);
    return res;
  };

  getCocktailsFromLocal = async (): Promise<CocktailModel[]> => {
    const cocktails = await this.cocktailLocalRepository.getAllCocktails();
    return cocktails;
  };

  removeAllCocktailsFromLocal = async (): Promise<void> => {
    await this.cocktailLocalRepository.removeAllCocktails();
  };

  removeCocktailById = async (id: string): Promise<void> => {
    await this.cocktailLocalRepository.removeCocktailById(id);
  };
}
