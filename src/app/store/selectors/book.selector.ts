import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectFavouritesState = createFeatureSelector<ReadonlyArray<string>>('favourites');

export const selectBookFavourites = createSelector(
    selectBooks,
    selectFavouritesState,
    (books, favourites) => {
        return favourites.map((id) => books.find((book) => book.id === id));
    }
);