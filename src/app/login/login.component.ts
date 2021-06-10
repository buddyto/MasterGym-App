import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formularioLogin: FormGroup
  datosCorrectos: boolean = true;
  textoError: string = '';
  constructor(private creadorFormulario: FormBuilder, public auth: AngularFireAuth, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formularioLogin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    })
  }
  ingresar()
  {
    if(this.formularioLogin.valid)
    {
      this.datosCorrectos = true;
      this.spinner.show()
      this.auth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password).then((usuario)=>{
        console.log(usuario)
        this.spinner.hide()
      }).catch((error)=>{
        
        if(error.code == "auth/user-not-found")
        {
          this.datosCorrectos = false;
          this.spinner.hide()
          this.textoError = "User not found"
        }
        else if(error.code == "auth/wrong-password")
        {
          this.datosCorrectos = false;
          this.spinner.hide()
          this.textoError = "Bad credentials"
        }
        else if(error.code == "auth/too-many-requests")
        {
          this.datosCorrectos = false;
          this.spinner.hide()
          this.textoError = "You did too many requests, you're blocked for an hour."
        }
        else
        {
          this.datosCorrectos = false;
          this.spinner.hide()
          this.textoError = "Error. Can't login at the moment"
        }

      })
    }
    else
    {
      this.datosCorrectos = false;
      this.textoError = 'Please check the credentials'
    }
    
  }

}
