import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaAvisosDomesticosPageRoutingModule } from './lista-avisos-domesticos-routing.module';
import { ListaAvisosDomesticosPage } from './lista-avisos-domesticos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ListaAvisosDomesticosPageRoutingModule
  ],
  declarations: [ListaAvisosDomesticosPage]
})
export class ListaAvisosDomesticosPageModule { }
