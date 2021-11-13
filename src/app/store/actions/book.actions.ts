import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const enum BookActionTypes {
    ADD_BOOK = '[Book Favourites] Add Book',
    REMOVE_BOOK = '[Book Favourites] Remove Book',
    GET_BOOKS = '[API] Retrieve Books',
    GET_BOOKS_SUCCESS = '[API] Retrieve Books Success',
    GET_BOOKS_FAILURE = '[API] Retrieve Books Failure',
};


export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId: string }>()
);

export const removeBook = createAction(
    '[Book Favourites] Remove Book',
    props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
    '[API] Retrieve Books Success',
    props<{ books: ReadonlyArray<Book> }>()
);
