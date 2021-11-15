import { createReducer, on } from '@ngrx/store';
import { toggleDrawer, setDrawer } from '../actions/app-utils.actions';

export interface UtilsState {
    drawerIsOpen: boolean;
    listMode: boolean;
}

export const initialUtilsState: UtilsState = {
    drawerIsOpen: false,
    listMode: false,
}


export const UtilsReducer = createReducer(
    initialUtilsState,
    on(toggleDrawer, state => ({
        ...state,
        drawerIsOpen: !state.drawerIsOpen
    })),
    /*
    on(setDrawer, (state, { open }) => ({
        ...state,
        drawerIsOpen: open
    })),*/

);