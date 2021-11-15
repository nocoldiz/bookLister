import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UtilsState } from '../reducers/app-utils.reducer';



export const getUtilsState = createFeatureSelector<UtilsState>('utils');

export const getDrawer = createSelector(
    getUtilsState,
    (state: UtilsState) => state.drawerIsOpen
);
export const getListMode = createSelector(
    getUtilsState,
    (state: UtilsState) => state.listMode
);

