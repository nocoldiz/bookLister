import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../../models/book.model';
import { BookState } from '../reducers/book.reducer';



export const getBookState = createFeatureSelector<BookState>('books');

export const getBookList = createSelector(
    getBookState,
    (state: BookState) => state.books
);
export const getIsLoading = createSelector(
    getBookState,
    (state: BookState) => state.isLoading
);
/*
export const selectBookFavourites = createSelector(
    selectBooks,
    selectFavouritesState,
    (books, favourites) => {
        return favourites.map((id) => books.find((book) => book.id === id));
    }
);*/