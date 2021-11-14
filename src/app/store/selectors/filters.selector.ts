import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Filters } from '../../models/filters.model';

export const selectFilters = createFeatureSelector<Filters>('filters');
