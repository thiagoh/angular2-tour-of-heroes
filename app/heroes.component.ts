import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  templateUrl: 'app/heroes.component.html',
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;
  addingHero: boolean;
  error: any;

  constructor(
    private _router: Router,
    private _heroService: HeroService) { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.addingHero = false;
  }
  getHeroes() {
    this._heroService.getHeroes().then(result => this.heroes = result);
  }
  ngOnInit() {
    this.getHeroes();
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this._heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

