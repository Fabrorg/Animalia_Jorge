import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvisosAdminPageRoutingModule } from './avisos-admin-routing.module';
import { AvisosAdminPage } from './avisos-admin.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AvisosAdminPageRoutingModule
  ],
  declarations: [AvisosAdminPage]
})
export class AvisosAdminPageModule {}

