import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import * as AuthActions from './auth/auth.actions';
import * as AuthState from './auth/auth.state';

import * as DropdownActions from './dropdowns/dropdowns.actions';
import * as DropdownState from './dropdowns/dropdowns.state';

export type AuthState = AuthState.State;
export type DropdownState = DropdownState.State;

export interface ActionFactory {
    readonly auth: AuthActions.ActionFactory;
    readonly dropdowns: DropdownActions.ActionFactory;
}

export interface InternalActionFactory {
    readonly auth: AuthActions.InternalActionFactory;
    readonly dropdowns: DropdownActions.InternalActionFactory;
}

export interface AppState {
    readonly auth: AuthState;
    readonly dropdowns: DropdownState;
}

export interface AppReducers {
    readonly [reducerName: string]: Function;
}

export const reducers: AppReducers = {
    auth: AuthState.reducer,
    dropdowns: DropdownState.reducer
}

export type ActionFactoryMapper = (factory: ActionFactory) => Action;
export type InternalActionFactoryMapper = (factory: InternalActionFactory) => Action;
export type StateMapper<T> = (state: AppState) => T;

@Injectable()
export class AppStore {
    constructor(
        private readonly ngrxStore: Store<AppState>
    ) { }

    public dispatch(actionFactoryMapper: ActionFactoryMapper): void {
        this.ngrxStore.dispatch(actionFactoryMapper(this.actionFactory));
    }

    public create(internalActionFactoryMapper: InternalActionFactoryMapper): Action {
        return internalActionFactoryMapper(this.internalActionFactory);
    }

    public select<T>(stateMapper: StateMapper<T>): Observable<T> {
        return this.ngrxStore.select(stateMapper);
    }

    public snapshot<T>(stateMapper: StateMapper<T>): T {
        let snapshot: T;
        this.select(stateMapper).take(1).subscribe((latest: T) => snapshot = latest);

        return snapshot;
    }

    public snapshotCloned<T>(stateMapper: StateMapper<T>): T {
        let snapshot: T;
        this.select(stateMapper).take(1).subscribe((latest: T) => snapshot = latest);
        return JSON.parse(JSON.stringify(snapshot));
    }

    public completeSnapshot(): AppState {
        return this.snapshot(state => state);
    }

    public match<T>(value: T, stateMapper: StateMapper<T>): boolean {
        return value === this.snapshot(stateMapper);
    }

    public blockUntil(stateMapper: StateMapper<boolean>): Observable<boolean> {
        return this.select(stateMapper).filter((selectedValue: boolean) => selectedValue).take(1);
    }

    public blockUntilMatch<T>(value: T, stateMapper: StateMapper<T>): Observable<null> {
        return this.select(stateMapper).filter((selectedValue: T) => value === selectedValue).take(1).map(() => null);
    }

    private readonly actionFactory: ActionFactory = {
        auth: new AuthActions.ActionFactory,
        dropdowns: new DropdownActions.ActionFactory,
    }

    private readonly internalActionFactory: InternalActionFactory = {
        auth: new AuthActions.InternalActionFactory,
        dropdowns: new DropdownActions.InternalActionFactory
    }

}