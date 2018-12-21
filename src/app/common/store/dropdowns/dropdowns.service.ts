import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IDropdown } from '../../interfaces/dropdowns.interface';

@Injectable()
export class DropdownService {
    constructor(private apiService: ApiService) { }

    public getDropdownData(): Observable<IDropdown> {
        return this.apiService.get(
            'Dropdown/GetDropdownData',
            {
                params: { }
            }
        );
    }
}