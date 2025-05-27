import { Component, OnInit } from '@angular/core';
import { AvisoDomesticoService } from '../services/aviso-domestico.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

interface Aviso {
  id?: number;
  nombre: string;
  especie: string;
  raza: string;
  descripcion: string;
  ubicacion: string;
  estado: string;
  telefono: string;
  foto?: string | null;
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
  filtroNombre: string = '';
  isImageModalOpen = false;
  selectedImage: string = '';

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
        this.avisos = data
          .filter((aviso: Aviso) => !aviso.deleted)
          .map((aviso: Aviso) => ({
            ...aviso,
            foto: aviso.foto ? `${environment.apiUrl}/imagen/${aviso.foto}` : null
          }));
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

  copiarUbicacion(ubicacion: string) {
    navigator.clipboard.writeText(ubicacion).then(() => {
      this.presentToast('Ubicación copiada correctamente en el Portapapeles');
    }).catch(err => {
      console.error('Error al copiar la ubicación:', err);
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

  getAvisosFiltrados(): Aviso[] {
    if (!this.filtroNombre.trim()) {
      return this.avisos;
    }
    return this.avisos.filter(aviso =>
      aviso.nombre.toLowerCase().includes(this.filtroNombre.trim().toLowerCase())
    );
  }

  trackByAvisoId(index: number, aviso: Aviso): number {
    return aviso.id || index;
  }

  openImageModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
    this.selectedImage = '';
  }
}
