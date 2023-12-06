import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero: Hero | undefined;

  constructor(private heroesService: HeroesService) { }

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.heroes = [];
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }

  test() {
    var doSearch = function(array: any, targetValue: any) {
      var min = 0;
      var max = array.length - 1;
        var guess = (min + max)/2;
        while(min <= max) {
            if(array[guess] === targetValue) return guess;
            if(array[guess] <= targetValue) min = guess + 1;
            else max = guess - 1;
        }



      return -1;
    };
  }
}
