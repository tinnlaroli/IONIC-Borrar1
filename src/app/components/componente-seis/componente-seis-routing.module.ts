import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteSeisPage } from './componente-seis.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteSeisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteSeisPageRoutingModule {}
