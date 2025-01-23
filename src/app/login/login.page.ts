import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  standalone : false,
  selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string = '';
  password : string = '';
  isLogged : boolean = false;
  
  constructor() { 
    //this.email = ''; <- No es necesario, es una forma de inicializar la variable
    //this.password = ''; <- No es necesario, es una forma de inicializar la variable
  }

  ngOnInit() {
  }

  login( form : NgForm ){ 
  //    console.log(form.value); <- Es una forma de ver el contenido del formulario
  //    console.log('valid : ' , form.valid); <- Es una forma de ver si el formulario es valido

    if(form.invalid){
      console.log('Todos los campos son requeridos');
      return;
    }

    if(this.email === 'admin' && this.password === 'admin'){
      this.isLogged = true;
      alert('Login correcto');
    } else {
      this.isLogged = true;
      alert('Login incorrecto');
    } 
  } 
}
