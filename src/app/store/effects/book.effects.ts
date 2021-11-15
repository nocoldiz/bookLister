import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service'
import { getBooks, getBooksSuccess, getBooksFailure } from '../actions/book.actions';
@Injectable()
export class BookEffects {

    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBooks),
            exhaustMap((req) =>
                this.apiService.getBooks({
                    search: req.filters.search,
                    author: req.filters.author,
                    isbn: req.filters.isbn,
                    publisher: req.filters.publisher,
                    subject: req.filters.subject
                }).pipe(
                    map((response) => getBooksSuccess({ books: response })),
                    catchError((e) => of(getBooksFailure({ error: e })))
                )
            )
        )
    );


    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}


