import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteTresPage } from './componente-tres.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteTresPageRoutingModule {}
