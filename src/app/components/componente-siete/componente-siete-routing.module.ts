import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteSietePage } from './componente-siete.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteSietePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteSietePageRoutingModule {}
