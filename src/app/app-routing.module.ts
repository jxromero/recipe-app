import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './core/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './core/recipe-detail/recipe-detail.component';


const routes: Routes = [
  { path: 'list', component: RecipeListComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: "", redirectTo: "list", pathMatch: "full"},
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
