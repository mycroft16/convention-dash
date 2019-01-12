import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guards/auth/auth.guard';

import { ConsComponent } from './common/components/cons/cons.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { GuestsComponent } from './common/components/guests/guests.component';
import { LoginComponent } from './common/components/login/login.component';
import { SettingsComponent } from './common/components/settings/settings.component';
import { VendorsComponent } from './common/components/vendors/vendors.component';

const routes: Routes = [

  { path: 'cons',       canActivate: [AuthGuard], component: ConsComponent },
  { path: 'dashboard',  canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'guests',     canActivate: [AuthGuard], component: GuestsComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'settings',   canActivate: [AuthGuard], component: SettingsComponent },
  { path: 'vendors',    canActivate: [AuthGuard], component: VendorsComponent },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
