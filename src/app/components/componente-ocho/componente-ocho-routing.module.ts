import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteOchoPage } from './componente-ocho.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteOchoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteOchoPageRoutingModule {}
