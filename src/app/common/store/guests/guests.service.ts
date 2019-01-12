import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IGuest } from '../../interfaces/guests.interface';
import * as moment from 'moment';

@Injectable()
export class GuestsService {
    constructor(private apiService: ApiService) { }

    public getGuestList(): Observable<IGuest[]> {
        return this.apiService.get(
            'Guests/GetGuestList',
            {
                params: { }
            }
        );
    }

    public createGuest(guest: IGuest): Observable<IGuest[]> {
        return this.apiService.post(
            'Guests/CreateGuest',
            {
                body: guest
            }
        );
    }

}