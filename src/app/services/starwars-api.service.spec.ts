import { TestBed } from '@angular/core/testing';

import { StarwarsApiService } from './starwars-api.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment.development';
import { Film } from '../models/starwars-api.models';
import { GetIdFromUrlPipe } from '../pipes/get-id-from-url.pipe';

describe('StarwarsApiService', () => {
  let service: StarwarsApiService;
  let httpTesting: HttpTestingController;
  let getIdFromUrlPipe: GetIdFromUrlPipe;

  let mockFilmResponse = {
    count: 6,
    next: null,
    previous: null,
    results: [
      {
        title: 'A New Hope',
        episode_id: 4,
        opening_crawl: 'Opening Crawl Mock',
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
        release_date: '1977-05-25',
        characters: [
          'https://swapi.dev/api/people/1/',
          'https://swapi.dev/api/people/2/',
        ],
        planets: [],
        starships: [],
        vehicles: [],
        species: [],
        created: '2014-12-10T14:23:31.880000Z',
        edited: '2014-12-20T19:49:45.256000Z',
        url: 'https://swapi.dev/api/films/1/',
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(StarwarsApiService);
    httpTesting = TestBed.inject(HttpTestingController);
    getIdFromUrlPipe = TestBed.inject(GetIdFromUrlPipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get Film by ID request', () => {
    // given
    const filmId = 1;
    const expectedUrl = environment.startwarsApiFilmsPath + '/' + filmId;

    // when
    service.getFilmById(1).subscribe();

    // then
    const req = httpTesting.expectOne({
      method: 'GET',
      url: expectedUrl,
    });
    req.flush([]);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should make a get All Films request and map the response to a list of Film', () => {
    // given
    const expectedUrl = environment.startwarsApiFilmsPath;
    const expectedFilmsResponse: Film[] = [
      {
        id: 1,
        title: 'A New Hope',
        episode_id: 4,
        opening_crawl: 'Opening Crawl Mock',
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
        release_date: '1977-05-25',
        characters: [
          'https://swapi.dev/api/people/1/',
          'https://swapi.dev/api/people/2/',
        ],
        planets: [],
        starships: [],
        vehicles: [],
        species: [],
        created: '2014-12-10T14:23:31.880000Z',
        edited: '2014-12-20T19:49:45.256000Z',
        url: 'https://swapi.dev/api/films/1/',
      },
    ];

    spyOn(getIdFromUrlPipe, 'transform').and.returnValue(1);

    // when
    service.getAllFilms().subscribe((response) => {
      expect(response).toEqual(expectedFilmsResponse);
      expect(getIdFromUrlPipe.transform).toHaveBeenCalledWith(
        expectedFilmsResponse[0].url
      );
    });

    // then
    const req = httpTesting.expectOne({
      method: 'GET',
      url: expectedUrl,
    });
    req.flush(mockFilmResponse);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should make a get Character by ID request', () => {
    // given
    const characterId = 1;
    const expectedUrl = environment.startwarsApiPeoplePath + '/' + characterId;

    // when
    service.getCharacterById(1).subscribe();

    // then
    const req = httpTesting.expectOne({
      method: 'GET',
      url: expectedUrl,
    });
    req.flush([]);
  });

  afterEach(() => {
    httpTesting.verify();
  });
});
