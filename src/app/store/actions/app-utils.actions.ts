import { createAction, props } from '@ngrx/store';

export const enum AppActionTypes {
    TOGGLE_DRAWER = '[App] Toggle drawer',
    SET_DRAWER = '[App] Set drawer',
    SET_IS_LOADING = '[App] Set is loading',
};

export const toggleDrawer = createAction(
    AppActionTypes.TOGGLE_DRAWER,
);


export const setDrawer = createAction(
    AppActionTypes.SET_DRAWER,
    props<{ open: boolean }>()

);
