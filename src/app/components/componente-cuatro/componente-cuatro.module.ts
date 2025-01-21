import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteCuatroPageRoutingModule } from './componente-cuatro-routing.module';

import { ComponenteCuatroPage } from './componente-cuatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteCuatroPageRoutingModule
  ],
  declarations: [ComponenteCuatroPage]
})
export class ComponenteCuatroPageModule {}
