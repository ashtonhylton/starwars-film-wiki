import { Routes } from '@angular/router';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsListComponent } from './components/films-list/films-list.component';

export const routes: Routes = [
  { path: 'film-details/:id', component: FilmDetailsComponent },
  {
    path: '**',
    component: FilmsListComponent,
  },
];
