import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  standalone : false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre : string = '';
  email : string = '';
  password : string = '';
  password2 : string = '';
  constructor( private navCtrlr : NavController ) { }

  ngOnInit() {
  }

  register( form : NgForm ){ 

    if(form.invalid){
      console.log('Todos los campos son requeridos');
      return;
    }
    
    if(this.password !== this.password2){
      alert('Las contraseñas no coinciden');
      return;
    } else {
      alert('Registro exitoso');
      this.navCtrlr.navigateBack('/login');
    }


  }
}
