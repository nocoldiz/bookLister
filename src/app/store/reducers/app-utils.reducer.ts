import { createReducer, on } from '@ngrx/store';
import { toggleDrawer, setDrawer } from '../actions/app-utils.actions';
import { AppUtils } from 'src/app/models/app-utils.model';

export const initialAppUtilsState: AppUtils = { isLoading: false, toggleDrawer: false, viewMode: false }

export const AppUtilsReducer = createReducer(
    initialAppUtilsState,
    on(toggleDrawer, state => ({
        ...state,
        toggleDrawer: !state.toggleDrawer
    })),
    // on(setDrawer, (state, open) => ({ ...state, toggleDrawer: open })),

);

