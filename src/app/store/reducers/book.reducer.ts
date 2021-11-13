import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book.model';

import { retrievedBookList } from '../actions/book.actions';

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { books }) => books)
);