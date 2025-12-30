import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface MiembroEquipo {
  id: number;
  nombre: string;
  cargo: string;
  foto: string;
  descripcion: string;
  telefono?: string;
  email?: string;
  especialidad?: string;
  aniosExperiencia?: number;
  visible: boolean;
}

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.scss'
})
export class EquipoComponent {
  private modalService = inject(NgbModal);

  miembros: MiembroEquipo[] = [
    {
      id: 1,
      nombre: 'María Elena Rojas',
      cargo: 'Wedding Planner Senior',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      descripcion: 'Experta en planificación de bodas con más de 10 años de experiencia. Especializada en ceremonias elegantes y eventos de lujo. Ha coordinado más de 200 bodas exitosas.',
      telefono: '+51 999 888 777',
      email: 'maria.rojas@bodas.com',
      especialidad: 'Bodas de Lujo',
      aniosExperiencia: 10,
      visible: true
    },
    {
      id: 2,
      nombre: 'Carlos Mendoza',
      cargo: 'Coordinador de Eventos',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      descripcion: 'Responsable de la logística y coordinación el día del evento. Garantiza que cada detalle se ejecute perfectamente según lo planificado. Profesional organizado y atento.',
      telefono: '+51 988 777 666',
      email: 'carlos.mendoza@bodas.com',
      especialidad: 'Logística y Coordinación',
      aniosExperiencia: 7,
      visible: true
    },
    {
      id: 3,
      nombre: 'Ana Sofía García',
      cargo: 'Asesora de Decoración',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      descripcion: 'Creativa diseñadora floral y de ambientes. Transforma espacios en experiencias mágicas con su visión artística. Especialista en tendencias de decoración nupcial.',
      telefono: '+51 977 666 555',
      email: 'ana.garcia@bodas.com',
      especialidad: 'Diseño Floral y Decoración',
      aniosExperiencia: 8,
      visible: true
    },
    {
      id: 4,
      nombre: 'Roberto Vega',
      cargo: 'Asesor de Catering',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      descripcion: 'Chef especializado en menús para eventos. Crea experiencias gastronómicas únicas adaptadas a cada pareja. Experto en cocina internacional y fusión.',
      telefono: '+51 966 555 444',
      email: 'roberto.vega@bodas.com',
      especialidad: 'Gastronomía para Eventos',
      aniosExperiencia: 12,
      visible: true
    },
    {
      id: 5,
      nombre: 'Patricia Salazar',
      cargo: 'Asistente de Producción',
      foto: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
      descripcion: 'Encargada de la gestión de proveedores y seguimiento de contratos. Mantiene la comunicación fluida con todos los involucrados en tu evento especial.',
      telefono: '+51 955 444 333',
      email: 'patricia.salazar@bodas.com',
      especialidad: 'Gestión de Proveedores',
      aniosExperiencia: 5,
      visible: true
    }
  ];

  miembroSeleccionado: MiembroEquipo | null = null;
  nuevoMiembro: MiembroEquipo = this.getMiembroVacio();
  mostrarFormulario = false;
  modoEdicion = false;
  terminoBusqueda = '';

  cargos = [
    'Wedding Planner Senior',
    'Wedding Planner Junior',
    'Coordinador de Eventos',
    'Asistente de Coordinación',
    'Asesor de Decoración',
    'Asesor de Catering',
    'Asistente de Producción',
    'Diseñador Floral',
    'Fotógrafo',
    'Videógrafo',
    'DJ / Sonido',
    'Maestro de Ceremonias',
    'Otro'
  ];

  get miembrosFiltrados(): MiembroEquipo[] {
    if (!this.terminoBusqueda) {
      return this.miembros;
    }

    const termino = this.terminoBusqueda.toLowerCase();
    return this.miembros.filter(m =>
      m.nombre.toLowerCase().includes(termino) ||
      m.cargo.toLowerCase().includes(termino) ||
      (m.especialidad && m.especialidad.toLowerCase().includes(termino))
    );
  }

  get totalMiembros(): number {
    return this.miembros.length;
  }

  get miembrosVisibles(): number {
    return this.miembros.filter(m => m.visible).length;
  }

  get experienciaPromedio(): number {
    const miembrosConExp = this.miembros.filter(m => m.aniosExperiencia);
    if (miembrosConExp.length === 0) return 0;
    const total = miembrosConExp.reduce((sum, m) => sum + (m.aniosExperiencia || 0), 0);
    return Math.round(total / miembrosConExp.length);
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.modoEdicion = false;
    this.nuevoMiembro = this.getMiembroVacio();
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.nuevoMiembro = this.getMiembroVacio();
  }

  editarMiembro(miembro: MiembroEquipo): void {
    this.nuevoMiembro = { ...miembro };
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  guardarMiembro(): void {
    if (!this.nuevoMiembro.nombre || !this.nuevoMiembro.cargo || !this.nuevoMiembro.foto || !this.nuevoMiembro.descripcion) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    if (this.modoEdicion) {
      const index = this.miembros.findIndex(m => m.id === this.nuevoMiembro.id);
      if (index !== -1) {
        this.miembros[index] = { ...this.nuevoMiembro };
      }
    } else {
      this.nuevoMiembro.id = Math.max(...this.miembros.map(m => m.id), 0) + 1;
      this.miembros.push({ ...this.nuevoMiembro });
    }

    this.cerrarFormulario();
  }

  eliminarMiembro(id: number): void {
    if (confirm('¿Estás seguro de eliminar este miembro del equipo?')) {
      this.miembros = this.miembros.filter(m => m.id !== id);
    }
  }

  toggleVisibilidad(miembro: MiembroEquipo): void {
    miembro.visible = !miembro.visible;
  }

  verDetalle(miembro: MiembroEquipo, content: any): void {
    this.miembroSeleccionado = miembro;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  duplicarMiembro(miembro: MiembroEquipo): void {
    const nuevo: MiembroEquipo = {
      ...miembro,
      id: Math.max(...this.miembros.map(m => m.id), 0) + 1,
      nombre: `${miembro.nombre} (Copia)`
    };
    this.miembros.push(nuevo);
  }

  private getMiembroVacio(): MiembroEquipo {
    return {
      id: 0,
      nombre: '',
      cargo: '',
      foto: '',
      descripcion: '',
      telefono: '',
      email: '',
      especialidad: '',
      aniosExperiencia: undefined,
      visible: true
    };
  }
}
