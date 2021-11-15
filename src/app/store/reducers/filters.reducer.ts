import { createReducer, on } from '@ngrx/store';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Filters } from '../../models/filters.model';

import { setQuery, setAuthor, setIsbn, setSubject } from '../actions/filters.actions';

export const initialState: any = {
    author: "",
    isbn: "",
    search: "",
    publisher: "",
    subject: ""

};

export const FiltersReducer = createReducer(
    initialState,
    on(setQuery, (state, { query }) => query)
);