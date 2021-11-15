import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Filters } from 'src/app/models/filters.model';
import { ApiService } from '../../services/api.service'
import { getBooks, getBooksSuccess, getBooksFailure } from '../actions/book.actions';
@Injectable()
export class BookEffects {
    request: Filters = {
        search: "Angulars",
        author: "",
        isbn: "",
        publisher: "",
        subject: ""
    }
    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBooks),
            tap((movie) => console.log("TAP", movie)),
            exhaustMap(() =>
                this.apiService.getBooks({
                    search: "Angular",
                    author: "",
                    isbn: "",
                    publisher: "",
                    subject: ""
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



/*


    request = { search: "Stephen King", isbn: "", author: "", publisher: "", subject: "" }

    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBooks),
            tap((books) => console.log(books)),
            exhaustMap(() =>
                this.apiService.getBooks(filters: request)
                    .pipe(
                        map(books => ({ getBooksSuccess({ books }) })),
                        catchError(() => EMPTY)
                    ))
        )
    );*/