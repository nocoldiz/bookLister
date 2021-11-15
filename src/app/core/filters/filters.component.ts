import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filters } from '../../models/filters.model';
import subjectsArray from 'src/assets/categories.json';


@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    filters: Filters = {
        author: "",
        isbn: "",
        search: "",
        publisher: "",
        subject: ""
    }
    subjects = subjectsArray;
    @Output() add = new EventEmitter<string>();

    onKeyUp = () => {
        console.log("Refresh");
        console.log(this.filters.search);

    }

}
