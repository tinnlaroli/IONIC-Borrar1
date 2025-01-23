import { Component, OnInit } from '@angular/core';

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

  login(){ 
    if(this.email === 'admin' && this.password === 'admin'){
      this.isLogged = true;
      alert('Login correcto');
    } else {
      this.isLogged = true;
      alert('Login incorrecto');
    } 
  } 
}
