import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { HeaderComponent } from './Header/header/header.component';
import { SigninComponent } from './Registration/signin/signin.component';
import { SignupComponent } from './Registration/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: './homepage', pathMatch: 'full' },
  {path: 'Header', component: HeaderComponent},
  {path: 'Homepage', component: HomepageComponent},
  {path: 'Signin', component: SigninComponent},
  {path: 'Signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
