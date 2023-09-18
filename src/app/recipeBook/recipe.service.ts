import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test recipe',
  //     'Test burger with test cheese',
  //     'https://www.smokingriddle.co.uk/wp-content/uploads/2020/11/smokin-griddle-just-cheese-bacon-jam-square.jpg',
  //     [new Ingredient('Burger meat', 1), new Ingredient('Cheese slices', 1)]
  //   ),
  //   new Recipe(
  //     'Test doughnut',
  //     'Test sprinkles',
  //     'https://www.theflavorbender.com/wp-content/uploads/2014/09/Simpsons-Doughnuts-4238-Copy-1.jpg',
  //     [new Ingredient('Dough', 1), new Ingredient('Sprinkles', 100)]
  //   ),
  // ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // Using slice with no args returns an exact copy of the array,
    //but not THE array. No way to access the array from outside.
    return this.recipes.slice();
  }

  getRecipebyID(id: number): Recipe {
    return this.recipes[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    //Passing ingredient to slService
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipesList();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateRecipesList();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateRecipesList();
  }

  updateRecipesList() {
    this.recipesChanged.next(this.recipes.slice());
  }
}
