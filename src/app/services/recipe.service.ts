import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = 'http://localhost:3001';

  constructor(
    private http: HttpClient
  ) { }

  getRecipes() {
    return this.http.get(`${this.baseUrl}/recipes`)
  }

  getSpecials() {
    return this.http.get(`${this.baseUrl}/specials`)
  }

  getRecipe(id) {
    return this.http.get(`${this.baseUrl}/recipes/${id}`)
  }

  deleteRecipe(id) {
    return this.http.delete(`${this.baseUrl}/recipes/${id}`)
  }
}
