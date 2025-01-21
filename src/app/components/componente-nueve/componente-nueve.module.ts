import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteNuevePageRoutingModule } from './componente-nueve-routing.module';

import { ComponenteNuevePage } from './componente-nueve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteNuevePageRoutingModule
  ],
  declarations: [ComponenteNuevePage]
})
export class ComponenteNuevePageModule {}
