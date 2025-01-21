import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteUnoPageRoutingModule } from './componente-uno-routing.module';

import { ComponenteUnoPage } from './componente-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteUnoPageRoutingModule
  ],
  declarations: [ComponenteUnoPage]
})
export class ComponenteUnoPageModule {}
