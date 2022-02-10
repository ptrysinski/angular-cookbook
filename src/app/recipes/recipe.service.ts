import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('Test Recipe 2', 'Test Description 2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }

}