import { createAction, props } from '@ngrx/store';
import { Filters } from 'src/app/models/filters.model';
import { Book } from '../../models/book.model';

export const enum AppActionTypes {
    TOGGLE_DRAWER = '[App] Toggle drawer',
    SET_IS_LOADING = '[App] Set is loading',
};

export const toggleDrawer = createAction(
    AppActionTypes.TOGGLE_DRAWER,
);
