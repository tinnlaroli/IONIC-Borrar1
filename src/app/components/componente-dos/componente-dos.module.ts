import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteDosPageRoutingModule } from './componente-dos-routing.module';

import { ComponenteDosPage } from './componente-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteDosPageRoutingModule
  ],
  declarations: [ComponenteDosPage]
})
export class ComponenteDosPageModule {}
