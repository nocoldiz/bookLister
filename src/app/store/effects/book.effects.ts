import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service'
import { getBooks, getBooksSuccess, getBooksFailure } from '../actions/book.actions';
@Injectable()
export class BookEffects {
    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBooks),
            tap((filters) => console.log(filters)),
        )
    );
    /*
    
                exhaustMap(() => {
                    this.apiService.getBooks().pipe(
                        map((books)) => getBooksSuccess(books),
                        catchError(() => EMPTY)
                    )
                })
    
                */


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