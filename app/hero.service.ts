import { Injectable } from '@angular/core';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';

// Deprecated - old implementation
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHero(id: number) {
    return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  // Deprecated - old implementation
  // getHeroes() {
  //   // return Promise.resolve(HEROES);
  // 
  //   return new Promise<Hero[]>((resolve, reject) => {
  //     setTimeout(() => resolve(HEROES), 1200);
  //   });
  // }

  getHeroes(): Promise<Hero[]> {

    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}