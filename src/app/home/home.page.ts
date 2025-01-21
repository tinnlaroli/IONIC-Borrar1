import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(){
    console.log("hola mundo");
    let n = 0;
    n = 6;
    n= 505;
    n= n;
    n=n+n+n-2;
    console.log("Bounjour tout le mounde");
    console.log("hello world");
    console.log("nihao");
  }
}
