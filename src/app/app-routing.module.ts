import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guards/auth/auth.guard';

import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { LoginComponent } from './common/components/login/login.component';

const routes: Routes = [

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
