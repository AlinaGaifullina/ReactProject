import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CocktailLocalClient {
  get = async (tableName: string) => {
    const data = await AsyncStorage.getItem(tableName);
    return data ? JSON.parse(data) : null;
  };
  set = async (tableName: string, data: any) => {
    return AsyncStorage.setItem(tableName, JSON.stringify(data));
  };
  removeAll = async (tableName: string) => {
    return AsyncStorage.removeItem(tableName);
  };

  removeById = async (tableName: string, id: string) => {
    const data = await this.get(tableName);

    if (data) {
      const updatedData = data.filter((item: any) => item.id !== id);
      await this.set(tableName, updatedData);
    }
  };
}
