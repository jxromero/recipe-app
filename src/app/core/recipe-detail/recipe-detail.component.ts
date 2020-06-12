import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, mergeMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  stop$ = new Subject<void>()
  special: any;
  recipe: any;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    console.log(this.routes.snapshot.params.id)
    let id = this.routes.snapshot.params.id;
    if(id) {
      this.recipeService.getSpecials().pipe(
        takeUntil(this.stop$),
        tap((special: any) => this.special = special),
        mergeMap((special: any) => this.recipeService.getRecipe(id))
      ).subscribe(
        res => {
        this.recipe = res;
        }, 
        err => {
        this.router.navigate(['list'])
        }
      )
    }
  }

  stop() {
    this.stop$.next();
    this.stop$.complete();
  }

  ngOnDestroy(): void {
    this.stop();
  }

}
