import { EffectsModule } from '@ngrx/effects';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { ModuleWithProviders } from '@angular/core';
import { AppState, AppStore } from './app.store';

import { ApiService } from './api/api.service';

import { AuthEffects } from './auth/auth.effects';
import { AuthService } from './auth/auth.service';
import * as AuthState from './auth/auth.state';

import { ConsEffects } from './cons/cons.effects';
import { ConsService } from './cons/cons.service';
import * as ConsState from './cons/cons.state';

import { DropdownEffects } from './dropdowns/dropdowns.effects';
import { DropdownService } from './dropdowns/dropdowns.service';
import * as DropdownState from './dropdowns/dropdowns.state';

import { GuestsEffects } from './guests/guests.effects';
import { GuestsService } from './guests/guests.service';
import * as GuestsState from './guests/guests.state';

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    AuthService,
    ConsService,
    DropdownService,
    GuestsService,
    AppStore
]

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    AuthEffects,
    ConsEffects,
    DropdownEffects,
    GuestsEffects
]);

export const STORES: any = {
    auth: AuthState.reducer,
    cons: ConsState.reducer,
    dropdowns: DropdownState.reducer,
    guests: GuestsState.reducer
}