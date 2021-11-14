import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filters } from '../../models/filters.model';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    @Input() filters: ReadonlyArray<Filters> = [];
    @Output() add = new EventEmitter<string>();
}
