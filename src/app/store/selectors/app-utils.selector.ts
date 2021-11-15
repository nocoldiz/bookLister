import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppUtils } from 'src/app/models/app-utils.model';

export const selectUtils = createFeatureSelector<AppUtils>('utils');
