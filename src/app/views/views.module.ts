import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [NavBarComponent, MainContentComponent, SideBarComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent,
    MainContentComponent,
    SideBarComponent,
    LoginComponent
  ],
  providers: [
  ]

})
export class ViewsModule { }
