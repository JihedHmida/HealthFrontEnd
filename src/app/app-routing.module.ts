import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainContentComponent } from './views/main-content/main-content.component';
import { SignupComponent } from './views/signup/signup.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';

const routes: Routes = [{ path: 'home', component: MainContentComponent },
                        { path: '', redirectTo: '/home', pathMatch: 'full' },
                        { path: 'login', component: LoginComponent},
                        { path: 'sign', component: SignupComponent},
                        { path: '', component: NavBarComponent, outlet: 'navbar'},
                        { path: 'nav', component: NavBarComponent, outlet: 'navbar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
