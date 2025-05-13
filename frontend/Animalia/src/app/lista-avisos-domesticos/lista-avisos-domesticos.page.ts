import { Component, OnInit } from '@angular/core';
import { AvisoDomesticoService } from '../services/aviso-domestico.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

interface Aviso {
  id?: number;
  nombre: string;
  especie: string;
  raza: string;
  descripcion: string;
  ubicacion: string;
  estado: string;
  telefono: string;
  foto?: string;
  fecha_aviso: string;
  deleted: boolean;
}

@Component({
  selector: 'app-lista-avisos-domesticos',
  templateUrl: './lista-avisos-domesticos.page.html',
  styleUrls: ['./lista-avisos-domesticos.page.scss'],
  standalone: false
})
export class ListaAvisosDomesticosPage implements OnInit {
  avisos: Aviso[] = [];
  errorMessage = '';

  constructor(
    private avisoDomesticoService: AvisoDomesticoService,
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getAvisos();
  }

  getAvisos() {
    this.avisoDomesticoService.getAvisos().subscribe(
      (data: Aviso[]) => {
        this.avisos = data.filter((aviso: Aviso) => !aviso.deleted);
      },
      (error) => {
        console.error('Error al obtener avisos:', error);
        this.errorMessage = 'Error al cargar los avisos. Por favor, inténtelo de nuevo.';
      }
    );
  }

  copiarTelefono(telefono: string) {
    navigator.clipboard.writeText(telefono).then(() => {
      this.presentToast('Teléfono copiado correctamente en el Portapapeles');
    }).catch(err => {
      console.error('Error al copiar el teléfono:', err);
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
