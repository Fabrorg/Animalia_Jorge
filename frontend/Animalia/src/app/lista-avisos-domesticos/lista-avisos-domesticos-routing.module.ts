import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAvisosDomesticosPage } from './lista-avisos-domesticos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAvisosDomesticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAvisosDomesticosPageRoutingModule {}
