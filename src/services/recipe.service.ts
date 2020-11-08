import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Bread fresh',
      'Bread masters will appreciate this recipe too because it delivers with delicious flavor, a slightly crisp and mega satisfaction.',
      'https://images.unsplash.com/photo-1589714299622-6c46cf8b71fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Flour', 2),
        new Ingredient('Water', 4)
      ]),
    new Recipe('Crossaint',
      'This Homemade Croissants recipe is so buttery, flaky, and will make your morning breakfast amazing! ',
      'https://images.unsplash.com/photo-1533893057902-dbc94f18f01f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Butter', 1),
        new Ingredient('Honey', 4)]),
    new Recipe('Sweet potatoes',
      'Sweet Potato Bowls with Spiced Lamb and Mushrooms These sweet potato bowls are an easy go-to weeknight dinner: ' +
      'Steam the sweet potatoes while you sauté the mushrooms with spiced ground lamb.',
      'https://images.unsplash.com/photo-1536329711767-2ad681b7bf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Potatoes', 5),
        new Ingredient('Salt', 14)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe{
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void{
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) {
  }
}
