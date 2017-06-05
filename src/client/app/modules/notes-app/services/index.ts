import { AuthService } from './auth.service';
import { NotesService } from './notes.service';
import { UserService } from './user.service';
import { RouteGuardService } from './route-guard.service';

export const NOTES_APP_PROVIDERS: any[] = [
  AuthService,
  NotesService,
  UserService,
  RouteGuardService
];

export * from './auth.service';
export * from './notes.service';
export * from './user.service';
export * from './route-guard.service';