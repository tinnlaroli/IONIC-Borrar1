import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteSietePageRoutingModule } from './componente-siete-routing.module';

import { ComponenteSietePage } from './componente-siete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteSietePageRoutingModule
  ],
  declarations: [ComponenteSietePage]
})
export class ComponenteSietePageModule {}
