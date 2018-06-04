import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { HeaderComponent } from './common/header/header.component';
import { AboutComponent } from './container/about/about.component';
import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './container/login/login.component';

const appRoute:Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'user',
    loadChildren:'src/app/container/user/user.module#UserModule'
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo: '/about'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
