import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../store/models/book.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Array<Book>> {
        return this.http
            .get<{ items: Book[] }>(
                environment.apiUrl
            )
            .pipe(map((books) => books.items || []));
    }
}
