import { Component, OnInit } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.page.html',
  styleUrls: ['./componente-dos.page.scss'],
  
})
export class ComponenteDosPage implements OnInit {
//es del alrt 1 
  alertButtons1 = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alerta cancelada');
      }
    },
    {
      text: 'Aceptar',
      handler: () => {
        console.log('Alerta aceptada');
      }
    }
  ];

//del alert 2
  alertButtons2 = ['OK'];
  alertInputs2 = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

//del alert 3
public alertButtons3 = ['OK'];
public alertInputs3 = [
  {
    label: 'Red',
    type: 'radio',
    value: 'red',
  },
  {
    label: 'Blue',
    type: 'radio',
    value: 'blue',
  },
  {
    label: 'Green',
    type: 'radio',
    value: 'green',
  },
];
  constructor() { }

  ngOnInit() {
  }

}
