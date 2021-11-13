import { Book } from './book.model';

export interface AppState {
    books: ReadonlyArray<Book>;
    favourites: ReadonlyArray<string>;

}
