import { createReducer, on } from '@ngrx/store';
import { addUserAction, removeUserAction } from '../actions/user.actions';

export const initialState: ReadonlyArray<string> = [];

export const CollectionReducer = createReducer(
    initialState,
    on(addUserAction, (state, { userId }) => state.filter((id) => id !== userId)),
    on(removeUserAction, (state, { userId }) => {
        if (state.indexOf(userId) > -1) return state;

        return [...state, userId];
    })
);
