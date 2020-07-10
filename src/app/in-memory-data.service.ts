import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes: Hero[] = [ 
        { id: 1, name: "Hulk"},
        { id: 2, name: "Spider-Man"},
        { id: 3, name: "Nathan Drake"},
        { id: 4, name: "Joel Miller"},
        { id: 5, name: "Storm Ruler"},
        { id: 6, name: "Alabastre"},
        { id: 7, name: "Cocorecho"},
        { id: 8, name: "Specter Knight"},
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    const heroIds = heroes.map((hero) => hero.id);

    const maxId = Math.max(...heroIds);

    const nextId = maxId > 0 ? maxId + 1 : 1;

    return nextId;
  }

}
