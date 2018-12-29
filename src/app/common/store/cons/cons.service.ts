import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { ICons, ICon } from '../../interfaces/cons.interface';
import * as moment from 'moment';

@Injectable()
export class ConsService {
    constructor(private apiService: ApiService) { }

    public getCons(): Observable<ICons> {
        return this.apiService.get(
            'Cons/GetCons',
            {
                params: { }
            }
        ).pipe(
            map(response => this.getConDays(response))
        );
    }

    public createCon(con: ICon): Observable<ICons> {
        return this.apiService.post(
            'Cons/CreateCon',
            {
                body: con
            }
        ).pipe(
            map(response => this.getConDays(response))
        );
    }

    public refreshCons(): Observable<ICons> {
        return this.apiService.get(
            'Cons/RefreshCons',
            {
                params: { }
            }
        ).pipe(
            map(response => this.getConDays(response))
        );
    }


    // FUNCTIONS
    private getConDays(response: ICons): ICons {
        let cons = response.list;
        for (let i = 0; i < cons.length; i++) {
            const start = moment(cons[i].startDate);
            const end = moment(cons[i].endDate);
            const dayCount = end.diff(start, 'days');
            const statusString = (cons[i].status === "1") ? "Active" : "Planning";
            const startDisplay = moment(cons[i].startDate).format('MM/DD/YYYY');
            const endDisplay = moment(cons[i].endDate).format('MM/DD/YYYY');

            let daysTemp = [];
            for (let j = 0; j <= dayCount; j++) {
                const currentDate = moment(cons[i].startDate).add(j, 'days').format('YYYY-MM-DD');
                const currentDisplay = moment(currentDate).format('MMM Do');
      
                daysTemp.push({ "date": currentDate, "display": currentDisplay });
            }
            cons[i] = { 
                ...cons[i], 
                days: daysTemp,
                startDisplay: startDisplay,
                endDisplay: endDisplay,
                statusString: statusString
            };
        }

        return {
            ...response,
            list: cons
        };
    }
}