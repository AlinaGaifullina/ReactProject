export class CocktailModel{
    name: string = '';
    cocktailType: string = '';
    category: string = '';
    glassType: string = '';
    image: string = '';
    instructions: string = '';

    constructor(name: string, cocktailType: string, category: string, glassType: string, image: string, instructions: string) {
        this.name = name;
        this.cocktailType = cocktailType;
        this.category = category;
        this.glassType = glassType;
        this.image = image;
        this.instructions = instructions;
    }
}
