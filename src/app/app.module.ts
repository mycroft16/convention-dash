import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { COMPONENTS } from './common/components';
import { GUARDS } from './common/guards';
import { MODULES } from './common/modules';


// RXJS
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { STORES, EFFECTS, PROVIDERS, metaReducers } from './common/store';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(STORES, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EFFECTS,
    ...MODULES
  ],
  providers: [
    ...GUARDS,
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
