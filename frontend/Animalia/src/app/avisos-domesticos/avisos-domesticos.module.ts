import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvisosDomesticosPageRoutingModule } from './avisos-domesticos-routing.module';
import { AvisosDomesticosPage } from './avisos-domesticos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AvisosDomesticosPageRoutingModule
  ],
  declarations: [AvisosDomesticosPage]
})
export class AvisosDomesticosPageModule { } 