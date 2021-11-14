import { createAction, props } from '@ngrx/store';

export const enum BookActionTypes {
    SET_QUERY = '[Filters] Set Query',
    SET_AUTHOR = '[Filters] Set Author',
    SET_ISBN = '[Filters] Set Isbn',
    SET_SUBJECT = '[Filters] Set Subject',
};

export const setQuery = createAction(
    BookActionTypes.SET_QUERY,
    props<{ query: string }>()
);

export const setAuthor = createAction(
    BookActionTypes.SET_AUTHOR,
    props<{ author: string }>()
);

export const setIsbn = createAction(
    BookActionTypes.SET_ISBN,
    props<{ isbn: string }>()
);

export const setSubject = createAction(
    BookActionTypes.SET_SUBJECT,
    props<{ subject: string }>()
);
