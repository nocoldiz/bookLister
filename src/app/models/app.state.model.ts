import { Book } from './book.model';
import { Filters } from './filters.model';

export interface AppState {
    books: ReadonlyArray<Book>;
    favourites: Array<string>;
    filters: Filters;
    error: string,
    loading: boolean

}
