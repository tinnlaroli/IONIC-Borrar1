import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteCincoPageRoutingModule } from './componente-cinco-routing.module';

import { ComponenteCincoPage } from './componente-cinco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteCincoPageRoutingModule
  ],
  declarations: [ComponenteCincoPage]
})
export class ComponenteCincoPageModule {}
