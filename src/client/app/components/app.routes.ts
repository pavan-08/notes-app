// app
import { HomeRoutes } from './home/home.routes';
//import { AboutRoutes } from './about/about.routes';
import { SignupRoutes } from './signup/signup.routes';
import { LoginRoutes } from './login/login.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  //...AboutRoutes,
  ...SignupRoutes,
  ...LoginRoutes
];
