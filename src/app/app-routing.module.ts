import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { LotsComponent } from './components/lots/lots.component';
import { WineriesComponent } from './components/wineries/wineries.component';
import { LocalComponent } from './components/local/local.component';
import { FarmsComponent } from './components/farms/farms.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
path: 'apartaments', component: ApartmentsComponent
  },
  {
    path: 'lots', component: LotsComponent
  },
  {
    path: 'wineries', component: WineriesComponent
  },
  {
    path: 'local', component: LocalComponent
  },
  {
    path: 'farms', component: FarmsComponent
  },
 
  {
    path: 'nosotros', component: NosotrosComponent
  },
  {
    path: 'acerca-de', component: AcercaDeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
