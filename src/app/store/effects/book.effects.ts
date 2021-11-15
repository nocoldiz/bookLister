import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api.service'
import { BookActionTypes } from '../actions/book.actions';
@Injectable()
export class BookEffects {

    loadBooks$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.GET_BOOKS),
        mergeMap(() => this.apiService.getBooks({ search: "Stephen King", isbn: "", author: "", publisher: "", subject: "" })
            .pipe(
                map(movies => ({ type: BookActionTypes.GET_BOOKS_SUCCESS, payload: movies })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}
