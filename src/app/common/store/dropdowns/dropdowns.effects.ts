import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AppStore } from '../../store/app.store';
import { DropdownService } from './dropdowns.service';
import * as DropdownActions from './dropdowns.actions';

@Injectable()
export class DropdownEffects {

    @Effect()
    public getDropdownData: Observable<Action> = this.actions
        .pipe(
            ofType(DropdownActions.GetDropdownData.Type),
            switchMap((action: DropdownActions.GetDropdownData) => 
                this.service.getDropdownData()
                    .pipe(map(response => this.store.create(factory => factory.dropdowns.getDropdownDataSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: DropdownService
    ) { }
}