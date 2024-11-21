import AxiosClient from './AxiosClient.ts';
import {CocktailModel} from './CocktailModel.ts';

export default class CocktailRepository {
    apiClient: AxiosClient;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getRandomCocktail = async () : Promise<CocktailModel> => {
        return this.apiClient.get({}).then(result => {
            let data = result.data;
            if (Array.isArray(data.drinks) && data.drinks.length > 0) {
                let drink = data.drinks[0];
                let model = new CocktailModel(
                    drink.strDrink,
                    drink.strAlcoholic,
                    drink.strCategory,
                    drink.strGlass,
                    drink.strDrinkThumb,
                    drink.strInstructions
                );
                return model;
            } else {
                throw new Error("No drinks available");
            }
        });
    };

    getRandomCocktails = async (count = 7): Promise<CocktailModel[]> => {
        const cocktails = [];

        for (let i = 0; i < count; i++) {
            const result = await this.apiClient.get({});
            let data = result.data;

            if (Array.isArray(data.drinks) && data.drinks.length > 0) {
                let drink = data.drinks[0];
                let model = new CocktailModel(
                  drink.strDrink,
                  drink.strAlcoholic,
                  drink.strCategory,
                  drink.strGlass,
                  drink.strDrinkThumb,
                  drink.strInstructions
                );
                cocktails.push(model);
            } else {
                throw new Error("No drinks available");
            }
        }

        return cocktails;
    };
}
