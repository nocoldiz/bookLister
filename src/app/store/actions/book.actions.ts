import { createAction, props } from '@ngrx/store';
import { Filters } from 'src/app/models/filters.model';
import { Book } from '../../models/book.model';

export const enum BookActionTypes {
    ADD_BOOK = '[Book Favourites] Add Book',
    REMOVE_BOOK = '[Book Favourites] Remove Book',
    GET_BOOKS = '[API] Retrieve Books',
    GET_BOOKS_SUCCESS = '[API] Retrieve Books Success',
    GET_BOOKS_FAILURE = '[API] Retrieve Books Failure',
    GET_BOOKS_FROM_AUTHOR = '[API] Retrieve Books From Author',
};


export const addBook = createAction(
    BookActionTypes.ADD_BOOK,
    props<{ book: Book }>()
);

export const removeBook = createAction(
    BookActionTypes.REMOVE_BOOK,
    props<{ books: ReadonlyArray<Book> }>()
);

export const getBooks = createAction(
    BookActionTypes.GET_BOOKS,
    props<{ filters: Filters }>()
);

export const getBooksSuccess = createAction(
    BookActionTypes.GET_BOOKS_SUCCESS,
    props<{ books: ReadonlyArray<Book> }>()
);

export const getBooksFromAuthor = createAction(
    BookActionTypes.GET_BOOKS_FROM_AUTHOR,
    props<{ author: string }>()
);


export const getBooksFailure = createAction(
    BookActionTypes.GET_BOOKS_FAILURE,
    props<{ error: string }>()
);





