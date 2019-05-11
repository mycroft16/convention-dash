import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AppStore } from '../app.store';
import { GuestsService } from './guests.service';
import * as GuestsActions from './guests.actions';

@Injectable()
export class GuestsEffects {

    @Effect()
    public getGuestList: Observable<Action> = this.actions
        .pipe(
            ofType(GuestsActions.GetGuestList.Type),
            switchMap((action: GuestsActions.GetGuestList) =>
                this.service.getGuestList()
                    .pipe(map(response => this.store.create(factory => factory.guests.getGuestListSuccess(response))))
            )
        );
    
    @Effect()
    public createGuest: Observable<Action> = this.actions
        .pipe(
            ofType(GuestsActions.CreateGuest.Type),
            switchMap((action: GuestsActions.CreateGuest) =>
                this.service.createGuest(action.guest)
                    .pipe(map(response => this.store.create(factory => factory.guests.createGuestSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: GuestsService
    ) { }
}