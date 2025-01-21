import { Component, OnInit } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-componente-nueve',
  templateUrl: './componente-nueve.page.html',
  styleUrls: ['./componente-nueve.page.scss'],
})
export class ComponenteNuevePage implements OnInit {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  constructor() { }

  ngOnInit() {
  }

}
