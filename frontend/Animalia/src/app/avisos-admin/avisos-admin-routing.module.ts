import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisosAdminPage } from './avisos-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AvisosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisosAdminPageRoutingModule {}
