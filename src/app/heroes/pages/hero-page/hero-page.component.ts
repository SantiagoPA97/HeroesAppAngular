import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero: Hero | undefined;
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
    .subscribe(hero => hero ? this.hero = hero : this.router.navigate(['/heroes']));
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }
}
