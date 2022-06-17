import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
