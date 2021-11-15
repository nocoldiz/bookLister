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

    getBooks(filters: Filters): Observable<Array<Book>> {



        let queryString = filters.search;
        if (filters) queryString.concat('+inauthor:').concat(filters.author);
        console.log(queryString)
        const options = new HttpParams()
            .set('maxResults', 30)
            .set('orderBy', 'relevance')
            .set('q', queryString)

        return this.http
            .get<{ items: Book[] }>(
                environment.apiUrl,
                { params: options }
            )
            .pipe(map((books) => books.items || []));
    }
}
