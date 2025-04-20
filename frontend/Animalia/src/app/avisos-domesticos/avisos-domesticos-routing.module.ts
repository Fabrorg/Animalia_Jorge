import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisosDomesticosPage } from './avisos-domesticos.page';

const routes: Routes = [
  {
    path: '',
    component: AvisosDomesticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisosDomesticosPageRoutingModule { } 