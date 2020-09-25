import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void{
  }

  onAddItem(): void {
    const newIngName = this.nameInputRef.nativeElement.value;
    const newIngAmount = this.amountInputRef.nativeElement.value;
    const newIngredientObj = new Ingredient(newIngName, newIngAmount);
    this.ingredientAdded.emit(newIngredientObj);
  }

}
