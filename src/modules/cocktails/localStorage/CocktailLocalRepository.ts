import CocktailLocalClient from './CocktailLocalClient.ts';

export default class CocktailLocalRepository {
  localClient: CocktailLocalClient;
  tableName: string;

  constructor() {
    this.localClient = new CocktailLocalClient();
    this.tableName = 'cocktails';
  }
  getAllCocktails = () => {
    return this.localClient.get(this.tableName);
  };
  setCocktails = (data: any) => {
    return this.localClient.set(this.tableName, data);
  };
  removeAllCocktails = () => {
    return this.localClient.removeAll(this.tableName);
  };

  removeCocktailById = async (id: string) => {
    return this.localClient.removeById(this.tableName, id);
  };
}
