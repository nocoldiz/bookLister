import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../store/models/user.model';

@Injectable({ providedIn: 'root' })
export class GoogleUsersService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<Array<User>> {
        return this.http
            .get<{ items: User[] }>(
                'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
            )
            .pipe(map((users) => users.items || []));
    }
}
