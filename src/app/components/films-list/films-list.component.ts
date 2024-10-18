import { Component, inject, } from '@angular/core';
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { CommonModule } from '@angular/common';
import { MainStore } from '../../store/main.store';
import { LoadingComponent } from '../loading/loading.component';
import { RouterModule } from '@angular/router';
import { GetIdFromUrlPipe } from '../../pipes/get-id-from-url.pipe';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [
    RouterModule,
    FilmDetailsComponent,
    LoadingComponent,
    CommonModule,
    GetIdFromUrlPipe,
  ],
  templateUrl: './films-list.component.html',
})
export class FilmsListComponent {
  private readonly MAX_FILM_ID_NUMBER: number = 6;
  public readonly store = inject(MainStore);
  public featuredFilmId: number = this.getFeaturedFilmId();

  getFeaturedFilmId(): number {
    return Math.floor(Math.random() * this.MAX_FILM_ID_NUMBER) + 1;
  }
}
