import { Component, OnInit } from '@angular/core';
import { AvisoDomesticoService } from '../services/aviso-domestico.service';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient
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
}
