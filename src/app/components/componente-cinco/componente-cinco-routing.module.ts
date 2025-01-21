import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteCincoPage } from './componente-cinco.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteCincoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteCincoPageRoutingModule {}
