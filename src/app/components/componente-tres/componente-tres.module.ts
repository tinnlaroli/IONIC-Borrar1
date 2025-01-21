import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteTresPageRoutingModule } from './componente-tres-routing.module';

import { ComponenteTresPage } from './componente-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteTresPageRoutingModule
  ],
  declarations: [ComponenteTresPage]
})
export class ComponenteTresPageModule {}
