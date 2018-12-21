import { EffectsModule } from '@ngrx/effects';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { ModuleWithProviders } from '@angular/core';
import { AppState, AppStore } from './app.store';

import { ApiService } from './api/api.service';

import { AuthEffects } from './auth/auth.effects';
import { AuthService } from './auth/auth.service';
import * as AuthState from './auth/auth.state';

import { DropdownEffects } from './dropdowns/dropdowns.effects';
import { DropdownService } from './dropdowns/dropdowns.service';
import * as DropdownState from './dropdowns/dropdowns.state';

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    AuthService,
    DropdownService,
    AppStore
]

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    AuthEffects,
    DropdownEffects
]);

export const STORES: any = {
    auth: AuthState.reducer,
    dropdowns: DropdownState.reducer
}