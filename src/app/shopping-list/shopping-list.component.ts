import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('Apples', 4),
      new Ingredient('Oranges', 6),
      new Ingredient('Tomatoes', 3)
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
