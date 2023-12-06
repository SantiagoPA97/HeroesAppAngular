import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseURL: string = environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseURL}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseURL}/heroes/${id}`)
      .pipe(
        catchError(err => of(undefined))
      );
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseURL}/heroes?q=${term}&_limit=6`);
  }
}

