import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { Observable, of } from 'rxjs';
import { ICon } from '../../interfaces/cons.interface';
import { AppStore } from '../../store/app.store';
import * as moment from 'moment';

@Injectable()
export class ConsService {
    constructor(private apiService: ApiService, private store: AppStore) { }

    public getCons(): Observable<ICon[]> {
        return this.apiService.get(
            'Cons/GetCons',
            {
                params: { }
            }
        // );
        ).pipe(
            map(response => this.getConDays(response))
        );
    }

    public createCon(con: ICon): Observable<ICon[]> {
        return this.apiService.post(
            'Cons/CreateCon',
            {
                body: con
            }
        ).pipe(
            map(response => this.getConDays(response))
        );
    }

    public updateCon(con: ICon): Observable<ICon[]> {
        return this.apiService.post(
            'Cons/UpdateCon',
            {
                body: con
            }
        ).pipe(
            map(response => this.getConDays(response))
        )
    }

    public refreshCons(): Observable<ICon[]> {
        return this.apiService.get(
            'Cons/RefreshCons',
            {
                params: { }
            }
        ).pipe(
            map(response => this.getConDays(response))
        );
    }

    public deleteCon(conId: number): Observable<ICon[]> {
        return this.apiService.post(
            'Cons/DeleteCon',
            {
                body: { conId: conId }
            }
        ).pipe(
            map(response => this.getConDays(response))
        )
    }

    public selectCon(conIndex: number): Observable<number> {
        return of(conIndex);
    }


    // FUNCTIONS
    private getConDays(response: ICon[]): ICon[] {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            const start = moment(response[i].startDate);
            const end = moment(response[i].endDate);
            const dayCount = end.diff(start, 'days');
            const statusString = (response[i].status === "1") ? "Active" : "Planning";
            const startDisplay = moment(response[i].startDate).format('M/DD/YYYY');
            const endDisplay = moment(response[i].endDate).format('M/DD/YYYY');

            let daysTemp = [];
            for (let j = 0; j <= dayCount; j++) {
                const currentDate = moment(response[i].startDate).add(j, 'days').format('YYYY-MM-DD');
                const currentDisplay = moment(currentDate).format('MMM Do');
      
                daysTemp.push({ "date": currentDate, "display": currentDisplay });
            }
            response[i] = { 
                ...response[i], 
                days: daysTemp,
                startDisplay: startDisplay,
                endDisplay: endDisplay,
                statusString: statusString
            };
        }

        return [
            ...response
        ];
    }
}