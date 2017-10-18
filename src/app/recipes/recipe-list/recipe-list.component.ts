import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe('Test Recipe 1', 'This is a test Recipe 1', 'http://www.indianfoodforever.com/images/indian-breads-recipes.jpg'),
      new Recipe('Test Recipe 2 ', 'This is a test Recipe 2', 'http://www.cbc.ca/food/content/images/recipes/day1256-small.jpg'),
      new Recipe('Test Recipe 3 ', 'This is a test Recipe 3', 'http://www.indianfoodforever.com/images/indian-microwave.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }






}
