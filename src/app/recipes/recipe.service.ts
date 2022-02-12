import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe',
            'Test Description',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Test Recipe 2',
            'Test Description 2',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}