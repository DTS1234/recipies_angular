import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Dummy Recipe',
      'Add dumb text, then add another line of dumb text',
      'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/white-chocolate-peppermint-bark-18.jpg'),
    new Recipe('Dummy Recipe number 2',
      'Add dumb text, then add another line of dumb text',
      'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/white-chocolate-peppermint-bark-18.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

}
