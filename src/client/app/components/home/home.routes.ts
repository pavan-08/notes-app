import { HomeComponent } from './home.component';
import { RouteGuardService } from '../../modules/notes-app/index';

export const HomeRoutes: Array<any> = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteGuardService]
  }
];
