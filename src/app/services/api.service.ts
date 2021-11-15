import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';
import { Filters } from '../models/filters.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    getBooks(filters: Filters): Observable<ReadonlyArray<Book>> {
        let queryString = " ";
        if (!filters.search) filters.search = "";
        if (filters.search) queryString = queryString.concat('+intitle:').concat(filters.search)
        if (filters.author) queryString = queryString.concat('+inauthor:').concat(filters.author)
        if (filters.publisher) queryString = queryString.concat('+inpublisher:').concat(filters.publisher)
        if (filters.subject) queryString = queryString.concat('+subject:').concat(filters.subject)
        if (filters.isbn) queryString = queryString.concat('+isbn:').concat(filters.isbn)

        console.log("&q=" + queryString)
        const options = new HttpParams()
            .set('q', queryString)
            .set('orderBy', 'relevance')
            .set('maxResults', 30)

        return this.http.get<{ items: Book[] }>(
            environment.apiUrl,
            { params: options }
        )
            .pipe(map((books) => books.items || []),);
    }
}
