export interface IRecipe {
    id: number;
    name: string;
    image: string;
    description: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}