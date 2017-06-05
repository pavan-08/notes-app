import { DashboardComponent } from './dashboard.component';
import { RouteGuardService } from '../../modules/notes-app/index';

export const DashboardRoutes: Array<any> = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteGuardService]
  }
];
