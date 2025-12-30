import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Asistente {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  confirmado: boolean;
  fechaRegistro: Date;
}

interface Evento {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  lugar: string;
  tipoEvento: string;
  imagenPortada?: string;
  capacidadMaxima?: number;
  asistentes: Asistente[];
  activo: boolean;
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  private modalService = inject(NgbModal);

  eventos: Evento[] = [
    {
      id: 1,
      nombre: 'Wedding Fest 2026',
      descripcion: 'El festival de bodas más grande del año. Descubre las últimas tendencias en decoración, catering, fotografía y más. Conoce a los mejores proveedores y encuentra inspiración para tu boda perfecta.',
      fecha: new Date(2026, 2, 20), // 20 marzo 2026
      horaInicio: '10:00',
      horaFin: '19:00',
      lugar: 'Centro de Convenciones Gran Vía',
      tipoEvento: 'Feria',
      imagenPortada: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
      capacidadMaxima: 300,
      asistentes: [
        {
          id: 1,
          nombre: 'María González',
          email: 'maria.gonzalez@email.com',
          telefono: '+34 600 123 456',
          confirmado: true,
          fechaRegistro: new Date(2026, 1, 10)
        },
        {
          id: 2,
          nombre: 'Carlos Pérez',
          email: 'carlos.perez@email.com',
          confirmado: true,
          fechaRegistro: new Date(2026, 1, 12)
        },
        {
          id: 3,
          nombre: 'Ana Martínez',
          email: 'ana.martinez@email.com',
          telefono: '+34 655 789 012',
          confirmado: false,
          fechaRegistro: new Date(2026, 1, 15)
        },
        {
          id: 4,
          nombre: 'Luis Rodríguez',
          email: 'luis.rodriguez@email.com',
          confirmado: true,
          fechaRegistro: new Date(2026, 1, 18)
        },
        {
          id: 5,
          nombre: 'Elena Torres',
          email: 'elena.torres@email.com',
          telefono: '+34 612 345 678',
          confirmado: true,
          fechaRegistro: new Date(2026, 2, 1)
        }
      ],
      activo: true
    },
    {
      id: 2,
      nombre: 'Bridal Show 2026',
      descripcion: 'Exposición exclusiva de vestidos de novia y trajes de novio. Desfiles, pruebas personalizadas y asesoría de expertos en moda nupcial. Descuentos especiales para asistentes.',
      fecha: new Date(2026, 3, 15), // 15 abril 2026
      horaInicio: '12:00',
      horaFin: '20:00',
      lugar: 'Hotel Plaza Royal - Salón Imperial',
      tipoEvento: 'Exposición',
      imagenPortada: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      capacidadMaxima: 150,
      asistentes: [
        {
          id: 6,
          nombre: 'Roberto Silva',
          email: 'roberto.silva@email.com',
          confirmado: true,
          fechaRegistro: new Date(2026, 2, 22)
        },
        {
          id: 7,
          nombre: 'Patricia Vargas',
          email: 'patricia.vargas@email.com',
          telefono: '+34 688 234 567',
          confirmado: true,
          fechaRegistro: new Date(2026, 2, 25)
        },
        {
          id: 8,
          nombre: 'Diego Morales',
          email: 'diego.morales@email.com',
          confirmado: false,
          fechaRegistro: new Date(2026, 3, 1)
        }
      ],
      activo: true
    }
  ];

  nuevoEvento: Evento = this.getEventoVacio();
  mostrarFormulario = false;
  eventoEditando: Evento | null = null;
  eventoSeleccionado: Evento | null = null;

  tiposEvento = [
    'Exposición',
    'Taller',
    'Open House',
    'Conferencia',
    'Networking',
    'Feria',
    'Presentación',
    'Otro'
  ];

  getEventoVacio(): Evento {
    return {
      id: 0,
      nombre: '',
      descripcion: '',
      fecha: new Date(),
      horaInicio: '',
      horaFin: '',
      lugar: '',
      tipoEvento: 'Exposición',
      imagenPortada: '',
      capacidadMaxima: undefined,
      asistentes: [],
      activo: true
    };
  }

  abrirFormulario(): void {
    this.nuevoEvento = this.getEventoVacio();
    this.eventoEditando = null;
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.nuevoEvento = this.getEventoVacio();
    this.eventoEditando = null;
  }

  editarEvento(evento: Evento): void {
    this.eventoEditando = evento;
    this.nuevoEvento = { ...evento };
    this.mostrarFormulario = true;
  }

  onFechaChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.nuevoEvento.fecha = new Date(input.value);
  }

  guardarEvento(): void {
    if (!this.nuevoEvento.nombre || !this.nuevoEvento.fecha || !this.nuevoEvento.lugar) {
      return;
    }

    if (this.eventoEditando) {
      // Editar evento existente
      const index = this.eventos.findIndex(e => e.id === this.eventoEditando!.id);
      if (index !== -1) {
        this.eventos[index] = { ...this.nuevoEvento, asistentes: this.eventoEditando.asistentes };
      }
    } else {
      // Crear nuevo evento
      const nuevoId = Math.max(0, ...this.eventos.map(e => e.id)) + 1;
      this.eventos.push({
        ...this.nuevoEvento,
        id: nuevoId,
        asistentes: []
      });
    }

    this.cerrarFormulario();
  }

  eliminarEvento(evento: Evento): void {
    if (confirm(`¿Estás seguro de eliminar el evento "${evento.nombre}"?`)) {
      this.eventos = this.eventos.filter(e => e.id !== evento.id);
    }
  }

  toggleEstado(evento: Evento): void {
    evento.activo = !evento.activo;
  }

  duplicarEvento(evento: Evento): void {
    const nuevoId = Math.max(0, ...this.eventos.map(e => e.id)) + 1;
    const eventoDuplicado: Evento = {
      ...evento,
      id: nuevoId,
      nombre: `${evento.nombre} (Copia)`,
      asistentes: []
    };
    this.eventos.push(eventoDuplicado);
  }

  verAsistentes(evento: Evento, content: any): void {
    this.eventoSeleccionado = evento;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  esFuturo(fecha: Date): boolean {
    return fecha > new Date();
  }

  esPasado(fecha: Date): boolean {
    return fecha < new Date();
  }

  get eventosProximos(): Evento[] {
    return this.eventos
      .filter(e => this.esFuturo(e.fecha))
      .sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
  }

  get eventosPasados(): Evento[] {
    return this.eventos
      .filter(e => this.esPasado(e.fecha))
      .sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  }

  get totalEventos(): number {
    return this.eventos.length;
  }

  get eventosActivos(): number {
    return this.eventos.filter(e => e.activo).length;
  }

  get totalAsistentes(): number {
    return this.eventos.reduce((total, evento) => total + evento.asistentes.length, 0);
  }

  getAsistentesConfirmados(evento: Evento): number {
    return evento.asistentes.filter(a => a.confirmado).length;
  }

  getPorcentajeOcupacion(evento: Evento): number {
    if (!evento.capacidadMaxima) return 0;
    return Math.round((evento.asistentes.length / evento.capacidadMaxima) * 100);
  }

  getColorPorcentaje(porcentaje: number): string {
    if (porcentaje >= 80) return 'danger';
    if (porcentaje >= 50) return 'warning';
    return 'success';
  }
}
