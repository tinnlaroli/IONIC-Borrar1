import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteCuatroPage } from './componente-cuatro.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteCuatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteCuatroPageRoutingModule {}
