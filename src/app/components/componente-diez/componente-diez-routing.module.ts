import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteDiezPage } from './componente-diez.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteDiezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteDiezPageRoutingModule {}
