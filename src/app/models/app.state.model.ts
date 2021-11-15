import { Book } from './book.model';
import { AppUtils } from './app-utils.model';

export interface AppState {
    books: ReadonlyArray<Book>;
    favourites: Array<string>;
    utils: AppUtils
}
