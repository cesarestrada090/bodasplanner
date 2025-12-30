import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sello {
  id: number;
  nombre: string;
  ancho: number;
  alto: number;
  imagenUrl: string;
  codigoHtml: string;
}

@Component({
  selector: 'app-sello-colaborador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sello-colaborador.component.html',
  styleUrl: './sello-colaborador.component.scss'
})
export class SelloColaboradorComponent {
  // Información del proveedor (se obtendría de la sesión)
  nombreProveedor = 'Tu Empresa';
  idProveedor = '12345';

  sellos: Sello[] = [
    {
      id: 1,
      nombre: 'Sello Pequeño',
      ancho: 154,
      alto: 45,
      imagenUrl: 'https://via.placeholder.com/154x45/E97C9E/FFFFFF?text=Bodas+Planner',
      codigoHtml: this.generarCodigoHtml(154, 45, 'pequeno')
    },
    {
      id: 2,
      nombre: 'Sello Mediano',
      ancho: 200,
      alto: 60,
      imagenUrl: 'https://via.placeholder.com/200x60/E97C9E/FFFFFF?text=Bodas+Planner',
      codigoHtml: this.generarCodigoHtml(200, 60, 'mediano')
    },
    {
      id: 3,
      nombre: 'Sello Grande',
      ancho: 250,
      alto: 73,
      imagenUrl: 'https://via.placeholder.com/250x73/E97C9E/FFFFFF?text=Bodas+Planner',
      codigoHtml: this.generarCodigoHtml(250, 73, 'grande')
    },
    {
      id: 4,
      nombre: 'Sello Cuadrado',
      ancho: 150,
      alto: 150,
      imagenUrl: 'https://via.placeholder.com/150x150/E97C9E/FFFFFF?text=Bodas+Planner',
      codigoHtml: this.generarCodigoHtml(150, 150, 'cuadrado')
    }
  ];

  selloCopiado: number | null = null;

  copiarCodigo(sello: Sello): void {
    navigator.clipboard.writeText(sello.codigoHtml).then(() => {
      this.selloCopiado = sello.id;
      setTimeout(() => {
        this.selloCopiado = null;
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar:', err);
      alert('No se pudo copiar el código. Por favor, selecciona y copia manualmente.');
    });
  }

  private generarCodigoHtml(ancho: number, alto: number, tipo: string): string {
    const baseUrl = 'https://bodasplanner.com'; // URL base de la plataforma
    const imagenUrl = `${baseUrl}/assets/sellos/sello-${tipo}.png`;
    
    return `<!-- Sello Proveedor Bodas Planner -->
<a href="${baseUrl}/proveedor/${this.idProveedor}" target="_blank" rel="nofollow">
  <img src="${imagenUrl}" 
       alt="Proveedor Verificado - Bodas Planner" 
       width="${ancho}" 
       height="${alto}"
       style="border:0;">
</a>`;
  }

  verVistaPrevia(imagenUrl: string): void {
    window.open(imagenUrl, '_blank');
  }

  descargarImagen(sello: Sello): void {
    // En producción, esto descargaría la imagen real del servidor
    const link = document.createElement('a');
    link.href = sello.imagenUrl;
    link.download = `sello-bodas-planner-${sello.ancho}x${sello.alto}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
