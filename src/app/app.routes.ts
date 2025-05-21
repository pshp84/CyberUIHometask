import { Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Lorem2Component } from './pages/lorem-2/lorem-2.component';

export const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "lorem1", component: Lorem2Component},


  {path: "", redirectTo: "dashboard", pathMatch: "full"}
  // {
  //   path: '',
  //   component: SidebarComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     {
  //       path: 'dashboard',
  //       loadComponent: () =>
  //         import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  //     },
  //   ]
  // }
];
