import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Recipe} from '../models/recipe.model';
import {RecipeService} from './recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-project-2a794-default-rtdb.europe-west1.firebasedatabase.app/recpies.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://angular-project-2a794-default-rtdb.europe-west1.firebasedatabase.app/recpies.json')
      .subscribe(recipesResponse => {
        this.recipeService.setRecipes(recipesResponse);
      });
  }

}
