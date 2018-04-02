import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {TransposedComponent} from './transposed/transposed.component';

export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent,
  }, {
    path: 'user', component: UserComponent
  },{
    path: 'transpose', component: TransposedComponent
  }
];
