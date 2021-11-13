import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../store/models/user.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<Array<User>> {
        return this.http
            .get<{ items: User[] }>(
                environment.apiUrl
            )
            .pipe(map((users) => users.items || []));
    }
}
