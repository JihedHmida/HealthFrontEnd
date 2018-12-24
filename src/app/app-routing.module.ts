import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainContentComponent } from './views/main-content/main-content.component';

const routes: Routes = [{ path: 'home', component: MainContentComponent },
                        { path: '', redirectTo: '/home', pathMatch: 'full' },
                        { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
