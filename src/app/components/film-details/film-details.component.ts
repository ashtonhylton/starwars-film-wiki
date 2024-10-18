import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarwarsApiService } from '../../services/starwars-api.service';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Film, Character } from '../../models/starwars-api.models';
import { GetIdFromUrlPipe } from '../../pipes/get-id-from-url.pipe';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { CharacterIconsComponent } from '../character-icons/character-icons.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    GetIdFromUrlPipe,
    CharacterIconsComponent,
    CharacterDetailsComponent,
    LoadingComponent,
  ],
  templateUrl: './film-details.component.html',
})
export class FilmDetailsComponent {
  private starwarsApiService: StarwarsApiService = inject(StarwarsApiService);

  public film$!: Observable<Film>;
  public filmDetails!: Film;
  public selectedCharacter!: Character;
  public characterDetailsIsCollapsed: boolean = true;

  @Input() set id(filmId: number) {
    this.film$ = this.starwarsApiService.getFilmById(filmId);
  }
  @Input() simplifiedLayout: boolean = false;

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }
}
