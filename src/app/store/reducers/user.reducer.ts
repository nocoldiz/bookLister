import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';

import { getUserListAction } from '../actions/user.actions';

export const initialState: ReadonlyArray<User> = [];

export const UserReducer = createReducer(
    initialState,
    on(getUserListAction, (state, { users }) => users)
);
