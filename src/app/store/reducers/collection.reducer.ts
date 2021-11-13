import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from '../actions/book.actions';

export const initialState: ReadonlyArray<string> = [];

export const CollectionReducer = createReducer(
    initialState,
    on(addBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
    on(removeBook, (state, { bookId }) => {
        if (state.indexOf(bookId) > -1) return state;

        return [...state, bookId];
    })
);
