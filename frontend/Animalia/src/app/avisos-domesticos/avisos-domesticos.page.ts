import { Component, OnInit } from '@angular/core';
import { AvisoDomesticoService } from '../services/aviso-domestico.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-avisos-domesticos',
  templateUrl: './avisos-domesticos.page.html',
  styleUrls: ['./avisos-domesticos.page.scss'],
  standalone: false
})
export class AvisosDomesticosPage implements OnInit {
  avisos: any[] = [];
  showAvisoForm = false;
  nombre_archivo: string = '';
  selectedAviso: any = null;
  newAviso: any = {
    nombre: '',
    especie: '',
    raza: '',
    descripcion: '',
    telefono: '',
    ubicacion: '',
    estado: '',
    foto: ''
  };
  errorMessage = '';

  constructor(
    private avisoDomesticoService: AvisoDomesticoService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    //this.getAvisos();
  }

  getAvisos() {
    this.avisoDomesticoService.getAvisos().subscribe(
      (data) => {
        this.avisos = data.map((aviso: any) => ({
          ...aviso,
          foto: aviso.foto ? `${environment.apiUrl}/imagen/${aviso.foto}` : null
        }));
      },
      (error) => {
        console.error('Error al obtener avisos:', error);
      }
    );
  }

  addAviso() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const nuevoAviso = {
      ...this.newAviso,
      fecha_aviso: new Date().toISOString().split('T')[0],

      foto: this.nombre_archivo // Asignar el nombre del archivo a la propiedad foto

    };

    /*const formData = new FormData();
        formData.append('nombre', this.newAviso.nombre);
        formData.append('especie', this.newAviso.especie);
        formData.append('raza', this.newAviso.raza);
        formData.append('descripcion', this.newAviso.descripcion);
        formData.append('telefono', this.newAviso.telefono);
        formData.append('ubicacion', this.newAviso.ubicacion);
        formData.append('estado', this.newAviso.estado);
        formData.append('foto', this.newAviso.foto);
        formData.append('fecha_aviso', new Date().toISOString().split('T')[0]);*/

    this.avisoDomesticoService.addAviso(nuevoAviso, headers).subscribe(
      () => {
        this.getAvisos();
        this.showAvisoForm = false;
        this.newAviso = { // Restablece los valores del formulario
        nombre: '',
        especie: '',
        raza: '',
        descripcion: '',
        telefono: '',
        ubicacion: '',
        estado: '',
        foto: ''
      };
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error al añadir aviso:', error);
        this.errorMessage = 'Error al añadir aviso. Por favor, inténtelo de nuevo.';
      }
      
    );
  }

  /*subirImagen(event: any) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const nuevoAviso = {
      ...this.newAviso,
      fecha_aviso: new Date().toISOString().split('T')[0]
    };

    this.avisoDomesticoService.addAviso(nuevoAviso, headers).subscribe(
      () => {
        this.getAvisos();
        this.showAvisoForm = false;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error al añadir aviso:', error);
        this.errorMessage = 'Error al añadir aviso. Por favor, inténtelo de nuevo.';
      }
    );
  }*/

    subirImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const formData = new FormData();
      formData.append('file', file);
      this.nombre_archivo = file.name; // Guardar el nombre del archivo

      this.http.post(`${environment.apiUrl}/subir-imagen`, formData, {
        headers: headers,
        observe: 'response'
      }).subscribe(response => {
        if (response.status === 200 && response.body) {
          //const url_foto_perfil = response.body.url_foto_perfil;
          //this.newAviso.url_foto_perfil = url_foto_perfil.replace('/imagen/', '');
          console.log(formData.get('file'));
         
          console.log('Imagen subida correctamente:', response.body); 
        } else {
          console.error('Error al subir la imagen:', response.statusText);
        }
      }, error => {
        console.error('Error al subir la imagen:', error);
      });
    }
  }

  filtrarNumeros(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.newAviso.telefono = input.value; // Actualizar el modelo con el valor filtrado
  }

  borrarDatos() {
    this.newAviso = {
      nombre: '',
      especie: '',
      raza: '',
      descripcion: '',
      telefono: '',
      ubicacion: '',
      estado: '',
      foto: ''
    };
  }
}