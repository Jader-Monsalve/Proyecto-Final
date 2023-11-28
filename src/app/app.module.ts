import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { LotsComponent } from './components/lots/lots.component';
import { WineriesComponent } from './components/wineries/wineries.component';
import { FarmsComponent } from './components/farms/farms.component';
import { LocalComponent } from './components/local/local.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ApartmentsComponent,
    LotsComponent,
    WineriesComponent,
    FarmsComponent,
    LocalComponent,
    NosotrosComponent,
    ForgotPasswordComponent,
    AcercaDeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
