import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book.model';

import { getBooks, getBooksSuccess, addBook, removeBook } from '../actions/book.actions';

export interface BookState {
    books: ReadonlyArray<Book>;
    favourites: ReadonlyArray<Book>;
    isLoading: boolean;
}

export const initialBookState: BookState = {
    books: [],
    favourites: [],
    isLoading: false,
}

export const BookReducer = createReducer(
    initialBookState,
    on(getBooks, state => ({
        ...state,
        isLoading: true
    })),
    on(getBooksSuccess, (state, { books }) => ({
        ...state,
        books: books,
        isLoading: false
    })),
    on(addBook, (state, { book }) => ({
        ...state,
        favourites: [...state.favourites, book],
    })),
    on(removeBook, (state, { books }) => ({
        ...state,
        favourites: books,
    })),

);


