import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SanitizeUrlPipe } from '../../../../pipes/sanitize-url.pipe';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [CommonModule, FormsModule, SanitizeUrlPipe],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.scss'
})
export class LocalizacionComponent {
  
  localizacion = {
    direccion: {
      calle: 'Av. Larco 1301, Oficina 502',
      ciudad: 'Lima',
      distrito: 'Miraflores',
      codigoPostal: '15074',
      pais: 'Perú',
      referencia: 'Frente al Parque Kennedy, edificio azul'
    },
    coordenadas: {
      latitud: -12.120160,
      longitud: -77.029710
    }
  };

  paises = ['Perú', 'Chile', 'Colombia', 'México', 'España', 'Argentina'];

  get urlMapa(): string {
    const lat = this.localizacion.coordenadas.latitud;
    const lng = this.localizacion.coordenadas.longitud;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.${Math.random().toString().slice(2, 10)}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzEyLjYiUyA3N8KwMDEnNDYuOSJX!5e0!3m2!1ses!2spe!4v${Date.now()}!5m2!1ses!2spe`;
  }

  guardarLocalizacion(): void {
    console.log('Guardando localización:', this.localizacion);
    // Aquí iría la lógica para guardar
    alert('✓ Localización actualizada correctamente');
  }

  actualizarMapa(): void {
    console.log('Actualizando mapa con coordenadas:', this.localizacion.coordenadas);
    alert('📍 Mapa actualizado. Las parejas verán tu nueva ubicación.');
  }
}
