import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AppStore } from '../app.store';
import { ConsService } from './cons.service';
import * as ConsActions from './cons.actions';

@Injectable()
export class ConsEffects {

    @Effect()
    public loadProperties: Observable<Action> = this.actions
        .pipe(
            ofType(ConsActions.GetCons.Type),
            switchMap((action: ConsActions.GetCons) =>
                this.service.getCons()
                    .pipe(map(response => this.store.create(factory => factory.cons.getConsSuccess(response))))
            )
        );

    @Effect()
    public createCon: Observable<Action> = this.actions
        .pipe(
            ofType(ConsActions.CreateCon.Type),
            switchMap((action: ConsActions.CreateCon) =>
                this.service.createCon(action.con)
                    .pipe(map(response => this.store.create(factory => factory.cons.createConSuccess(response))))
            )
        );

    @Effect()
    public refreshCons: Observable<Action> = this.actions
            .pipe(
              ofType(ConsActions.RefreshCons.Type),
              switchMap((action: ConsActions.RefreshCons) =>
                this.service.refreshCons()
                    .pipe(map(response => this.store.create(factory => factory.cons.refreshConsSuccess(response))))
              )  
            );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: ConsService
    ) { }
}