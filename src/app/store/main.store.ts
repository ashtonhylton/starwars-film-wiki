import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Film } from '../models/starwars-api.models';
import { StarwarsApiService } from '../services/starwars-api.service';
import { inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

type MainState = {
  films: Film[];
  isLoadingFilms: boolean;
};

const initialState: MainState = {
  films: [],
  isLoadingFilms: false,
};

export const MainStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    _setLoadingFilms() {
      patchState(store, { isLoadingFilms: true });
    },
    _setFilms(films: Film[]) {
      patchState(store, { films: films, isLoadingFilms: false });
    },
    _setErrorFilms() {
      patchState(store, { isLoadingFilms: false });
    },
  })),
  withMethods((store, starwarsApiService = inject(StarwarsApiService)) => ({
    loadFilms: rxMethod<void>(
      pipe(
        tap(() => {
          store._setLoadingFilms();
        }),
        switchMap(() =>
          starwarsApiService.getAllFilms().pipe(
            tap({
              next: (films: Film[]) => store._setFilms(films),
              error: (error) => {
                store._setErrorFilms();
                console.log('Error Loading Films', error);
              },
            })
          )
        )
      )
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadFilms();
    },
  })
);
