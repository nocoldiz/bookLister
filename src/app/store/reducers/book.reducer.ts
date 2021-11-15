import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book.model';

import { getBooks, getBooksSuccess } from '../actions/book.actions';

export interface BookState {
    books: ReadonlyArray<Book>;
    isLoading: boolean;
    loaded: boolean;
}

export const initialBookState: BookState = {
    books: [],
    isLoading: false,
    loaded: false
}

export const BookReducer = createReducer(
    initialBookState,
    on(getBooks, state => ({ ...state, isLoading: true })),
    on(getBooksSuccess, (state, { books }) => ({ ...state, books: books, isLoading: false })),

);


