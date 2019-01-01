import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IGuest } from '../../interfaces/guests.interface';
import * as moment from 'moment';

@Injectable()
export class GuestsService {
    constructor(private apiService: ApiService) { }

    public getGuestList(conId: number): Observable<IGuest[]> {
        return this.apiService.get(
            'Guests/GetGuestList',
            {
                params: { conId: conId }
            }
        );
    }

}