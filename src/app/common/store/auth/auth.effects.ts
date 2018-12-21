import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AppStore } from '../app.store';
import { AuthService } from './auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    
    @Effect()
    public getAuthToken: Observable<Action> = this.actions
        .pipe(
            ofType(AuthActions.GetAuthToken.Type),
            switchMap((action: AuthActions.GetAuthToken) =>
                this.service.getAuthToken()
                    .pipe(map(response => this.store.create(factory => factory.auth.getAuthTokenSuccess(response)))
                    )
            )
        );

    @Effect()
    public getLoginToken: Observable<Action> = this.actions
        .pipe(
            ofType(AuthActions.GetLoginToken.Type),
            switchMap((action: AuthActions.GetLoginToken) =>
                this.service.getLoginToken()
                    .pipe(map(response => this.store.create(factory => factory.auth.getLoginTokenSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: AuthService
    ) { }

}