import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../models/user.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectUserCollection = createSelector(
    selectUsers,
    selectCollectionState,
    (users, collection) => {
        return collection.map((id) => users.find((user) => user.id === id));
    }
);