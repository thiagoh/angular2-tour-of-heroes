import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes() {
    this.heroService.getHeroes().then(result => this.heroes = result);
  }
  ngOnInit() {
    this.getHeroes();
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

