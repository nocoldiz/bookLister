import { User } from './user.model';

export interface AppState {
    users: ReadonlyArray<User>;
    collection: ReadonlyArray<string>;

}
