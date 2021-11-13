import { createAction, props } from "@ngrx/store";
import { User } from '../models/user.model';
export enum UserActionType {
    ADD_USER = '[USER] Add User',
    REMOVE_USER = '[USER] Remove User',
    GET_USER_LIST = '[USER] Get User List',
}

export const addUserAction = createAction(
    UserActionType.ADD_USER,
    props<{ userId: string }>()
);

export const removeUserAction = createAction(
    UserActionType.REMOVE_USER,
    props<{ userId: string }>()
);


export const getUserListAction = createAction(
    UserActionType.GET_USER_LIST,
    props<{ users: ReadonlyArray<User> }>()
);


