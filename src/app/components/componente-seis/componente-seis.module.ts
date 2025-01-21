import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteSeisPageRoutingModule } from './componente-seis-routing.module';

import { ComponenteSeisPage } from './componente-seis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteSeisPageRoutingModule
  ],
  declarations: [ComponenteSeisPage]
})
export class ComponenteSeisPageModule {}
