import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import {
  Film,
  FilmListResponse,
  Character,
  CharacterListResponse,
  Planet,
  Starship,
} from '../models/starwars-api.models';
import { GetIdFromUrlPipe } from '../pipes/get-id-from-url.pipe';

@Injectable({
  providedIn: 'root',
})
export class StarwarsApiService {
  constructor(
    private httpClient: HttpClient,
    private getIdFromUrlPipe: GetIdFromUrlPipe
  ) {}

  getAllFilms(): Observable<Film[]> {
    return this.httpClient
      .get<FilmListResponse>(environment.startwarsApiFilmsPath)
      .pipe(
        map((films) =>
          films.results.map((film) => {
            return { ...film, id: this.getIdFromUrlPipe.transform(film.url) };
          })
        )
      );
  }

  getFilmById(filmId: number): Observable<Film> {
    return this.httpClient.get<Film>(
      environment.startwarsApiFilmsPath + '/' + filmId
    );
  }

  getAllCharacters(): Observable<Character[]> {
    return this.httpClient
      .get<CharacterListResponse>(environment.startwarsApiPeoplePath)
      .pipe(map((response) => response.results));
  }

  getCharacterById(characterId: number): Observable<Character> {
    return this.httpClient.get<Character>(
      environment.startwarsApiPeoplePath + '/' + characterId
    );
  }

  getPlanetById(planetId: number): Observable<Planet> {
    return this.httpClient.get<Planet>(
      environment.startwarsApiPlanetsPath + '/' + planetId
    );
  }

  getStarshipById(starshipId: number): Observable<Starship> {
    return this.httpClient.get<Starship>(
      environment.startwarsApiStarshipsPath + '/' + starshipId
    );
  }
}
