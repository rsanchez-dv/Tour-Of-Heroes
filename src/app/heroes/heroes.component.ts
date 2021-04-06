import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
// Bring in the service
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // make it an empty array for Hero interface
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}
  // this invokes the function within the heroService
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {
    // Calls the function withing the Hero Component Class
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}