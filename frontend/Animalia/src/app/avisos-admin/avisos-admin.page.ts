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
  selector: 'app-avisos-admin',
  templateUrl: './avisos-admin.page.html',
  styleUrls: ['./avisos-admin.page.scss'],
  standalone: false,
})
export class AvisosAdminPage implements OnInit {
  avisos: Aviso[] = [];
  errorMessage = '';
  filtroNombre: string = '';

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

  eliminarAviso(id: number) {
    if (confirm('¿Está seguro de que desea eliminar este aviso?')) {
      this.avisoDomesticoService.deleteAviso(id).subscribe(
        () => {
          this.avisos = this.avisos.filter(aviso => aviso.id !== id);
          this.presentToast('Aviso eliminado correctamente');
        },
        (error) => {
          console.error('Error al eliminar aviso:', error);
          this.presentToast('Error al eliminar el aviso');
        }
      );
    }
  }
}