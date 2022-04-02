import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 // { path: '', redirectTo: 'labguru', pathMatch: 'full' },
 // { path: 'labguru',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)},
  //{ path: 'wfms',loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
  //{ path: 'about', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
