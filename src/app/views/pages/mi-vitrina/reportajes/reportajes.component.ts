import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatherIconDirective } from '../../../../core/feather-icon/feather-icon.directive';

interface Reportaje {
  id: number;
  titulo: string;
  fecha: string;
  descripcion: string;
  imagenPortada: string;
  imagenes: string[];
  proveedoresEtiquetados: {
    nombre: string;
    tipo: string;
  }[];
  visible: boolean;
}

@Component({
  selector: 'app-reportajes',
  standalone: true,
  imports: [CommonModule, FormsModule, FeatherIconDirective],
  templateUrl: './reportajes.component.html',
  styleUrl: './reportajes.component.scss'
})
export class ReportajesComponent {
  // Reportajes publicados
  reportajes: Reportaje[] = [
    {
      id: 1,
      titulo: 'Boda de Sofía & Carlos',
      fecha: '2024-06-15',
      descripcion: 'Una ceremonia romántica en jardín con detalles en rosa y dorado. La pareja eligió un estilo vintage con toques modernos.',
      imagenPortada: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      imagenes: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600',
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600'
      ],
      proveedoresEtiquetados: [
        { nombre: 'Flores del Valle', tipo: 'Floristería' },
        { nombre: 'Catering Gourmet', tipo: 'Banquetería' },
        { nombre: 'DJ Music Pro', tipo: 'Música' }
      ],
      visible: true
    }
  ];

  // Nuevo reportaje
  nuevoReportaje: Reportaje = {
    id: 0,
    titulo: '',
    fecha: '',
    descripcion: '',
    imagenPortada: '',
    imagenes: [],
    proveedoresEtiquetados: [],
    visible: true
  };

  // Control de formulario
  mostrarFormulario: boolean = false;

  // Proveedor temporal para agregar
  nuevoProveedor = {
    nombre: '',
    tipo: ''
  };

  // Nueva imagen temporal
  nuevaImagenUrl: string = '';

  // Métodos
  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.resetFormulario();
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.resetFormulario();
  }

  resetFormulario(): void {
    this.nuevoReportaje = {
      id: 0,
      titulo: '',
      fecha: '',
      descripcion: '',
      imagenPortada: '',
      imagenes: [],
      proveedoresEtiquetados: [],
      visible: true
    };
    this.nuevoProveedor = { nombre: '', tipo: '' };
    this.nuevaImagenUrl = '';
  }

  agregarImagen(): void {
    if (this.nuevaImagenUrl.trim()) {
      this.nuevoReportaje.imagenes.push(this.nuevaImagenUrl.trim());
      this.nuevaImagenUrl = '';
    }
  }

  eliminarImagen(index: number): void {
    this.nuevoReportaje.imagenes.splice(index, 1);
  }

  agregarProveedor(): void {
    if (this.nuevoProveedor.nombre.trim() && this.nuevoProveedor.tipo.trim()) {
      this.nuevoReportaje.proveedoresEtiquetados.push({
        nombre: this.nuevoProveedor.nombre.trim(),
        tipo: this.nuevoProveedor.tipo.trim()
      });
      this.nuevoProveedor = { nombre: '', tipo: '' };
    }
  }

  eliminarProveedor(index: number): void {
    this.nuevoReportaje.proveedoresEtiquetados.splice(index, 1);
  }

  guardarReportaje(): void {
    if (this.validarReportaje()) {
      const reportaje = {
        ...this.nuevoReportaje,
        id: Date.now(),
        fecha: this.nuevoReportaje.fecha || new Date().toISOString().split('T')[0]
      };

      this.reportajes.unshift(reportaje);
      this.cerrarFormulario();
      alert('¡Reportaje publicado exitosamente!');
    }
  }

  validarReportaje(): boolean {
    if (!this.nuevoReportaje.titulo.trim()) {
      alert('Por favor ingresa un título para el reportaje');
      return false;
    }
    if (!this.nuevoReportaje.descripcion.trim()) {
      alert('Por favor ingresa una descripción');
      return false;
    }
    if (!this.nuevoReportaje.imagenPortada.trim() && this.nuevoReportaje.imagenes.length === 0) {
      alert('Por favor agrega al menos una imagen');
      return false;
    }
    return true;
  }

  eliminarReportaje(id: number): void {
    if (confirm('¿Estás seguro de eliminar este reportaje?')) {
      this.reportajes = this.reportajes.filter(r => r.id !== id);
    }
  }

  toggleVisibilidad(reportaje: Reportaje): void {
    reportaje.visible = !reportaje.visible;
  }

  get totalReportajes(): number {
    return this.reportajes.length;
  }

  get reportajesVisibles(): number {
    return this.reportajes.filter(r => r.visible).length;
  }

  get totalProveedoresEtiquetados(): number {
    return this.reportajes.reduce((acc, r) => acc + r.proveedoresEtiquetados.length, 0);
  }
}
