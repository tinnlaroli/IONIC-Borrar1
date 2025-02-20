import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from '../../../../empty1/src/app/components/item-chat/item-chat.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ItemChatComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    ItemChatComponent
  ]
})
export class ComponentsModule { }
