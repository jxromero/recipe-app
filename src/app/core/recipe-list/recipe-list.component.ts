import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: any;

  constructor(
    private recipe: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipe.getRecipes().subscribe(res => {
      this.recipes = res;
      console.log(this.recipes)
    })
  }

  delete(id) {
    this.recipe.deleteRecipe(id).subscribe(res => {
      this.recipes = this.recipes.filter(r => r.uuid !== id);
    })
    console.log(id)
  }

}
