import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { ICon } from '../../interfaces/cons.interface';

@Injectable()
export class ConsService {
    constructor(private apiService: ApiService) { }

    public getCons(): Observable<ICon> {
        return this.apiService.get(
            'Cons/GetCons',
            {
                params: { }
            }
        );
    }

    public createCon(con: ICon): Observable<ICon> {
        return this.apiService.get(
            'Cons/CreateCon',
            {
                params: { con: con }
            }
        );
    }
}