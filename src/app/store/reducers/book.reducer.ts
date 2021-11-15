import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book.model';

import { getBooksSuccess } from '../actions/book.actions';

export const initialBookState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
    initialBookState,
    on(getBooksSuccess, (state, { books }) => books)
);
