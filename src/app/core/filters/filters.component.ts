import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filters } from '../../models/filters.model';
import subjectsArray from 'src/assets/categories.json';


@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    subjects = subjectsArray;
    @Input() filters: Filters;
    @Output() add = new EventEmitter<string>();

}
