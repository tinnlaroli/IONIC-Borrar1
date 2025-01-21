import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteOchoPageRoutingModule } from './componente-ocho-routing.module';

import { ComponenteOchoPage } from './componente-ocho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteOchoPageRoutingModule
  ],
  declarations: [ComponenteOchoPage]
})
export class ComponenteOchoPageModule {}
