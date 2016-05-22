import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() {
    // return Promise.resolve(HEROES);

    return new Promise<Hero[]>((resolve, reject) => {
      setTimeout(() => resolve(HEROES), 1200);
    });
  }
}