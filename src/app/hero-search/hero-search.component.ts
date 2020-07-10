import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero.model'
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  template: `
    <app-search-input (search)="onSearch($event)"></app-search-input>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let hero of heroes$ | async">
        <a routerLink="/heroes/{{ hero.id }}">{{ hero.name }}</a>
      </li>
    </ul>
  `,
})
export class HeroSearchComponent implements OnInit {
  // o dólar no final do nome da variável é uma convenção, para identificar uma variável do tipo observable
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.searchTerms.pipe(
      // aguardar meio segundo
      debounceTime(500),
      // se o que vier for igual ao termo anterior, não faz nada
      distinctUntilChanged(),
      // buscar no backend
      switchMap((term) => this.heroService.searchHeroes(term))
    )
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }
}
