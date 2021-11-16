import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable, timer } from 'rxjs';
import { debounce, map } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';
import { Filters } from '../models/filters.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    createQuery(filters: Filters): string {
        let queryString = "";
        if (filters.search) queryString = queryString.concat('intitle:').concat(filters.search)
        if (filters.author) queryString = queryString.concat('+inauthor:').concat(filters.author)
        if (filters.publisher) queryString = queryString.concat('+inpublisher:').concat(filters.publisher)
        if (filters.subject) queryString = queryString.concat('+subject:').concat(filters.subject)
        if (filters.isbn) queryString = queryString.concat('+isbn:').concat(filters.isbn)
        if (queryString == "") {
            queryString = "+intitle:Angular"
        }
        return queryString
    }

    getBooks(filters: Filters): Observable<ReadonlyArray<Book>> {

        const options = new HttpParams()
            .set('q', this.createQuery(filters))
            .set('orderBy', 'relevance')
            .set('maxResults', 40)

        return this.http.get<{ items: Book[] }>(
            environment.apiUrl,
            { params: options }
        )
            .pipe(
                debounce(() => timer(2000)),
                map((books) => books.items || []),
            );
    }
}
