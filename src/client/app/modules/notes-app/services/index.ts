import { AuthService } from './auth.service';
import { NotesService } from './notes.service';
import { UserService } from './user.service';

export const NOTES_APP_PROVIDERS: any[] = [
  AuthService,
  NotesService,
  UserService
];

export * from './auth.service';
export * from './notes.service';
export * from './user.service';
