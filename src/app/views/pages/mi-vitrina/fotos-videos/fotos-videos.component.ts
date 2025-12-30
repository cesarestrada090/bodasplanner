import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FeatherIconDirective } from '../../../../core/feather-icon/feather-icon.directive';

interface Foto {
  id: number;
  url: string;
  titulo: string;
  descripcion: string;
  favorita: boolean;
}

interface Video {
  id: number;
  url: string;
  titulo: string;
  descripcion: string;
  favorito: boolean;
  thumbnail?: string;
}

@Component({
  selector: 'app-fotos-videos',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbNavModule, NgbModalModule, FeatherIconDirective],
  templateUrl: './fotos-videos.component.html',
  styleUrl: './fotos-videos.component.scss'
})
export class FotosVideosComponent {

  activeTab = 1;
  videoActual: Video | null = null;

  // Fotos precargadas
  fotos: Foto[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      titulo: 'Ceremonia al aire libre',
      descripcion: 'Hermosa ceremonia en jardín con flores blancas',
      favorita: true
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600',
      titulo: 'Decoración de mesas',
      descripcion: 'Montaje elegante con centros de mesa florales',
      favorita: false
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
      titulo: 'Banquete de recepción',
      descripcion: 'Salón decorado para la celebración',
      favorita: true
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600',
      titulo: 'Pastel de bodas',
      descripcion: 'Elegante pastel de tres pisos',
      favorita: false
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
      titulo: 'Ramo de novia',
      descripcion: 'Ramo romántico con rosas y peonías',
      favorita: false
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600',
      titulo: 'Iluminación nocturna',
      descripcion: 'Ambiente mágico con luces colgantes',
      favorita: false
    }
  ];

  // Videos precargados
  videos: Video[] = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      titulo: 'Recorrido por el salón',
      descripcion: 'Video tour de nuestras instalaciones',
      favorito: true,
      thumbnail: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd44?w=600'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      titulo: 'Ceremonia de ejemplo',
      descripcion: 'Así lucen nuestras ceremonias',
      favorito: false,
      thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      titulo: 'Testimonial de pareja',
      descripcion: 'María y José cuentan su experiencia',
      favorito: true,
      thumbnail: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600'
    }
  ];

  siguienteFotoId = 7;
  siguienteVideoId = 4;

  mostrandoFormularioFoto = false;
  mostrandoFormularioVideo = false;

  nuevaFoto: Foto = this.crearFotoVacia();
  nuevoVideo: Video = this.crearVideoVacio();

  constructor(
    private modalService: NgbModal,
    private sanitizer: DomSanitizer
  ) {}

  crearFotoVacia(): Foto {
    return {
      id: 0,
      url: '',
      titulo: '',
      descripcion: '',
      favorita: false
    };
  }

  crearVideoVacio(): Video {
    return {
      id: 0,
      url: '',
      titulo: '',
      descripcion: '',
      favorito: false,
      thumbnail: ''
    };
  }

  // Fotos
  mostrarFormularioFoto(): void {
    this.nuevaFoto = this.crearFotoVacia();
    this.mostrandoFormularioFoto = true;
  }

  cancelarFoto(): void {
    this.mostrandoFormularioFoto = false;
    this.nuevaFoto = this.crearFotoVacia();
  }

  agregarFoto(): void {
    if (!this.nuevaFoto.url.trim()) {
      alert('⚠ La URL de la foto es requerida');
      return;
    }
    if (!this.nuevaFoto.titulo.trim()) {
      alert('⚠ El título es requerido');
      return;
    }

    this.nuevaFoto.id = this.siguienteFotoId++;
    this.fotos.push({ ...this.nuevaFoto });
    
    this.cancelarFoto();
    alert('✓ Foto agregada correctamente');
  }

  eliminarFoto(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta foto?')) {
      this.fotos = this.fotos.filter(f => f.id !== id);
      alert('✓ Foto eliminada');
    }
  }

  toggleFavorita(foto: Foto): void {
    foto.favorita = !foto.favorita;
  }

  // Videos
  mostrarFormularioVideo(): void {
    this.nuevoVideo = this.crearVideoVacio();
    this.mostrandoFormularioVideo = true;
  }

  cancelarVideo(): void {
    this.mostrandoFormularioVideo = false;
    this.nuevoVideo = this.crearVideoVacio();
  }

  agregarVideo(): void {
    if (!this.nuevoVideo.url.trim()) {
      alert('⚠ La URL del video es requerida');
      return;
    }
    if (!this.nuevoVideo.titulo.trim()) {
      alert('⚠ El título es requerido');
      return;
    }

    this.nuevoVideo.id = this.siguienteVideoId++;
    this.videos.push({ ...this.nuevoVideo });
    
    this.cancelarVideo();
    alert('✓ Video agregado correctamente');
  }

  eliminarVideo(id: number): void {
    if (confirm('¿Estás seguro de eliminar este video?')) {
      this.videos = this.videos.filter(v => v.id !== id);
      alert('✓ Video eliminado');
    }
  }

  verVideo(video: Video, content: any): void {
    this.videoActual = video;
    this.modalService.open(content, { 
      size: 'xl',
      centered: true,
      backdrop: 'static'
    });
  }

  cerrarModal(): void {
    this.videoActual = null;
    this.modalService.dismissAll();
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleFavorito(video: Video): void {
    video.favorito = !video.favorito;
  }

  get totalFotos(): number {
    return this.fotos.length;
  }

  get fotosFavoritas(): number {
    return this.fotos.filter(f => f.favorita).length;
  }

  get totalVideos(): number {
    return this.videos.length;
  }

  get videosFavoritos(): number {
    return this.videos.filter(v => v.favorito).length;
  }

  guardarCambios(): void {
    console.log('Guardando fotos y videos:', {
      fotos: this.fotos,
      videos: this.videos
    });
    alert('✓ Fotos y videos guardados correctamente');
  }
}
