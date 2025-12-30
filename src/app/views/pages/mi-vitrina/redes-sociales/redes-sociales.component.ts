import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RedSocial {
  id: number;
  nombre: string;
  icono: string;
  url: string;
  activa: boolean;
  seguidores?: number;
  color: string;
}

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.scss'
})
export class RedesSocialesComponent {
  redes: RedSocial[] = [
    {
      id: 1,
      nombre: 'Instagram',
      icono: 'instagram',
      url: 'https://instagram.com/bodasplanner',
      activa: true,
      seguidores: 12500,
      color: '#E4405F'
    },
    {
      id: 2,
      nombre: 'Facebook',
      icono: 'facebook',
      url: 'https://facebook.com/bodasplanner',
      activa: true,
      seguidores: 8300,
      color: '#1877F2'
    },
    {
      id: 3,
      nombre: 'TikTok',
      icono: 'music',
      url: 'https://tiktok.com/@bodasplanner',
      activa: true,
      seguidores: 5600,
      color: '#000000'
    },
    {
      id: 4,
      nombre: 'YouTube',
      icono: 'youtube',
      url: 'https://youtube.com/@bodasplanner',
      activa: true,
      seguidores: 3200,
      color: '#FF0000'
    },
    {
      id: 5,
      nombre: 'WhatsApp Business',
      icono: 'message-circle',
      url: 'https://wa.me/51999888777',
      activa: true,
      color: '#25D366'
    },
    {
      id: 6,
      nombre: 'Pinterest',
      icono: 'image',
      url: 'https://pinterest.com/bodasplanner',
      activa: false,
      seguidores: 1500,
      color: '#E60023'
    }
  ];

  redesDisponibles = [
    { nombre: 'Instagram', icono: 'instagram', color: '#E4405F' },
    { nombre: 'Facebook', icono: 'facebook', color: '#1877F2' },
    { nombre: 'TikTok', icono: 'music', color: '#000000' },
    { nombre: 'YouTube', icono: 'youtube', color: '#FF0000' },
    { nombre: 'Twitter/X', icono: 'twitter', color: '#1DA1F2' },
    { nombre: 'WhatsApp Business', icono: 'message-circle', color: '#25D366' },
    { nombre: 'Pinterest', icono: 'image', color: '#E60023' },
    { nombre: 'LinkedIn', icono: 'linkedin', color: '#0A66C2' },
    { nombre: 'Telegram', icono: 'send', color: '#0088cc' },
    { nombre: 'Otra', icono: 'link', color: '#666666' }
  ];

  redSeleccionada: RedSocial | null = null;
  nuevaRed: RedSocial = this.getRedVacia();
  mostrarFormulario = false;
  modoEdicion = false;

  get redesActivas(): RedSocial[] {
    return this.redes.filter(r => r.activa);
  }

  get redesInactivas(): RedSocial[] {
    return this.redes.filter(r => !r.activa);
  }

  get totalSeguidores(): number {
    return this.redes
      .filter(r => r.activa && r.seguidores)
      .reduce((sum, r) => sum + (r.seguidores || 0), 0);
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.modoEdicion = false;
    this.nuevaRed = this.getRedVacia();
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.nuevaRed = this.getRedVacia();
  }

  editarRed(red: RedSocial): void {
    this.nuevaRed = { ...red };
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  guardarRed(): void {
    if (!this.nuevaRed.nombre || !this.nuevaRed.url) {
      alert('Por favor completa el nombre y la URL de la red social');
      return;
    }

    // Validar formato de URL
    if (!this.nuevaRed.url.startsWith('http://') && !this.nuevaRed.url.startsWith('https://')) {
      alert('La URL debe comenzar con http:// o https://');
      return;
    }

    if (this.modoEdicion) {
      const index = this.redes.findIndex(r => r.id === this.nuevaRed.id);
      if (index !== -1) {
        this.redes[index] = { ...this.nuevaRed };
      }
    } else {
      this.nuevaRed.id = Math.max(...this.redes.map(r => r.id), 0) + 1;
      this.redes.push({ ...this.nuevaRed });
    }

    this.cerrarFormulario();
  }

  eliminarRed(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta red social?')) {
      this.redes = this.redes.filter(r => r.id !== id);
    }
  }

  toggleActivacion(red: RedSocial): void {
    red.activa = !red.activa;
  }

  seleccionarRedDisponible(redDisponible: any): void {
    this.nuevaRed.nombre = redDisponible.nombre;
    this.nuevaRed.icono = redDisponible.icono;
    this.nuevaRed.color = redDisponible.color;
  }

  copiarUrl(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copiada al portapapeles');
    }).catch(() => {
      alert('No se pudo copiar la URL');
    });
  }

  abrirEnlace(url: string): void {
    window.open(url, '_blank');
  }

  private getRedVacia(): RedSocial {
    return {
      id: 0,
      nombre: '',
      icono: 'link',
      url: '',
      activa: true,
      seguidores: undefined,
      color: '#E57A84'
    };
  }
}
