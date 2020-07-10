import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from './hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }),
  }

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {


    return this.http.get<Hero[]>(this.heroesUrl, this.httpOptions).pipe(
      tap((heroes) => this.log(`obtida lista de ${heroes.length} heróis`)),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }


  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`, this.httpOptions).pipe(
      tap(() => this.log("obtida lista de heróis")),
      catchError(this.handleError<Hero>('getHero'))
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put<Hero>(url, hero, this.httpOptions).pipe(
      tap(() => this.log(`atualizado hero id = ${hero.id}.`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  deleteHero(hero: Hero): Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put<Hero>(url, hero, this.httpOptions).pipe(
      tap(() => this.log(`apagado hero id = ${hero.id}.`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero) => this.log(`atualizado hero id = ${newHero.id}.`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  //GET heroes/?name=term
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term && !term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`, this.httpOptions).pipe(
      tap((heroes) => {
        heroes && heroes.length ? this.log(`encontrado termo = ${term} e ${heroes.length} heróis`)
          : this.log(`não encontrado para termo = ${term}`)
      }),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );

  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /* Quando o parâmetro tem um ? na frente, significa que este parâmetro não é obrigatório */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //logar no console o erro
      console.log(error);

      //logar no message qual o erro
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}

