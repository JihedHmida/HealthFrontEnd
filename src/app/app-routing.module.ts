import { ConsultationlistComponent } from './views/consultationlist/consultationlist.component';
import { ConsultationComponent } from './views/consultation/consultation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainContentComponent } from './views/main-content/main-content.component';
import { SignupComponent } from './views/signup/signup.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';

const routes: Routes = [{ path: 'home', component: MainContentComponent },
                        { path: 'login', component: LoginComponent},
                        { path: 'sign', component: SignupComponent},
                        { path: 'nav', component: NavBarComponent, outlet: 'navbar' },
                        { path: 'consultation', component: ConsultationComponent },
                        { path: 'consultationlist', component: ConsultationlistComponent},

                        { path: '', redirectTo: '/consultation', pathMatch: 'full' },
                        { path: '', component: NavBarComponent, outlet: 'navbar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
