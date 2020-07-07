import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock.heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = 
  { 
    id: 1, 
    name: 'Homem-Aranha'
  };

  heroes: Hero[] = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
