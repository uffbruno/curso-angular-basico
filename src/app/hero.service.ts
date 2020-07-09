import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from './hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = HEROES;

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: obtida lista de heróis");
    return of(this.heroes);
  }
}
