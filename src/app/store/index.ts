import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../models/book.model'
export const bookKey = 'book';

/*
export interface FavouritesState {
    favourites: ReadonlyArray<Book>;

}export interface UtilsState {
    toggleDrawer: boolean,
    viewMode: boolean
}
export interface AppState {
    books: BooksState;
    favourites: FavouritesState;
    utils: UtilsState;
}



export const selectBook = createFeatureSelector<AppState, BooksState>(bookKey);

export const selectBookList = createSelector(
    selectBook,
    (state: BooksState) => state.books
);*/