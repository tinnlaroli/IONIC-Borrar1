import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteNuevePage } from './componente-nueve.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteNuevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteNuevePageRoutingModule {}
