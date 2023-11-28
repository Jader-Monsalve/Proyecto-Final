import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  errorMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
    .then(() => {
      console.log('Correo de restablecimiento enviado correctamente');
      this.router.navigate(['/login']);
    })

    .catch((error) => {

      console.error('Error al enviar el correo de restablecimiento', error);
      this.errorMessage = 'Hubo un problema al enviar el correo de restablecimiento. Por favor, inténtalo de nuevo.';
    });
    
  }

  ngOnInit(): void {
  }

}
