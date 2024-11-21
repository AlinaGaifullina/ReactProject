export class CocktailModel{
  id: string = '';
  name: string = '';
  cocktailType: string = '';
  category: string = '';
  glassType: string = '';
  image: string = '';
  instructions: string = '';

  constructor(id: string, name: string, cocktailType: string, category: string, glassType: string, image: string, instructions: string) {
    this.id = id;
    this.name = name;
    this.cocktailType = cocktailType;
    this.category = category;
    this.glassType = glassType;
    this.image = image;
    this.instructions = instructions;
  }
}
