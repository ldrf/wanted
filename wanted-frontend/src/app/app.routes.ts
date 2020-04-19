import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.route';
import { HomeRoutes } from './home/home.route';
import { DashboardRoutes } from './dashboard/dashboard.route';
import { MyAccountRoutes } from './my-account/my-account.route';
import { ProjectRoutes } from './projects/search-projects.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationRoutes } from './notifications/notification.route';
import { IssuesRoutes } from './issues/issues.route';


export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  ...HomeRoutes,
  ...LoginRoutes,
  ...DashboardRoutes,
  ...MyAccountRoutes,
  ...ProjectRoutes,
  ...NotificationRoutes,
  ...IssuesRoutes

];
