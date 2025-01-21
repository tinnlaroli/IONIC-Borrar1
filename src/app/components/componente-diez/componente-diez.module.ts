import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteDiezPageRoutingModule } from './componente-diez-routing.module';

import { ComponenteDiezPage } from './componente-diez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteDiezPageRoutingModule
  ],
  declarations: [ComponenteDiezPage]
})
export class ComponenteDiezPageModule {}
