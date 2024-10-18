import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmDetailsComponent } from './film-details.component';
import { provideHttpClient } from '@angular/common/http';
import { Character } from '../../models/starwars-api.models';
import { StarwarsApiService } from '../../services/starwars-api.service';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;
  let starwarsApiService: StarwarsApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetailsComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    starwarsApiService = TestBed.inject(StarwarsApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the film ID and call service to fetch film by that ID', () => {
    // given
    const filmId = 100;
    spyOn(starwarsApiService, 'getFilmById');

    // when
    component.id = filmId;

    // then
    expect(starwarsApiService.getFilmById).toHaveBeenCalledWith(filmId);
  });

  it('should set selected character', () => {
    // given
    const character: Character = {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/20/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/38/'],
      starships: ['https://swapi.dev/api/starships/48/'],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'https://swapi.dev/api/people/10/',
    };

    // when
    component.selectCharacter(character);

    // then
    expect(component.selectedCharacter).toEqual(character);
  });
});
