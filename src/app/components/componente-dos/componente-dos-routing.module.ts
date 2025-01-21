import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteDosPage } from './componente-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteDosPageRoutingModule {}
