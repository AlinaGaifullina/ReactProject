import {CocktailModel} from './CocktailModel.ts';
import CocktailRepository from './CocktailRepository.ts';

export default class CocktailService {
    cocktailRepository;

    constructor() {
        this.cocktailRepository = new CocktailRepository();
    }
    getRandomCocktail = async ():Promise<CocktailModel> => {
        const res = await this.cocktailRepository.getRandomCocktail();
        return res;
    };

    getRandomCocktails = async ():Promise<CocktailModel[]> => {
        const res = await this.cocktailRepository.getRandomCocktails();
        return res;
    };
}
