import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Mensaje {
  id: number;
  autor: 'cliente' | 'proveedor';
  texto: string;
  fecha: Date;
  leido: boolean;
}

interface Solicitud {
  id: number;
  clienteNombre: string;
  clienteAvatar?: string;
  mensajes: Mensaje[];
  estado: 'pendiente' | 'respondida' | 'descartada';
  fechaEvento: Date;
  numeroInvitados: string;
  leida: boolean;
  archivada: boolean;
  fechaUltimoMensaje: Date;
}

@Component({
  selector: 'app-solicitudes-resumen',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './solicitudes-resumen.component.html',
  styleUrl: './solicitudes-resumen.component.scss'
})
export class SolicitudesResumenComponent {
  solicitudes: Solicitud[] = [
    {
      id: 1,
      clienteNombre: 'Andrea Martínez Silva',
      clienteAvatar: 'https://i.pravatar.cc/150?img=1',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Buenas tardes, estamos planeando nuestra boda para julio y nos encantaría conocer más sobre sus servicios. ¿Podrían enviarnos información sobre paquetes disponibles?',
          fecha: new Date('2025-12-28T14:30:00'),
          leido: false
        }
      ],
      estado: 'pendiente',
      fechaEvento: new Date('2026-07-15'),
      numeroInvitados: '80-120',
      leida: false,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-28T14:30:00')
    },
    {
      id: 2,
      clienteNombre: 'Carlos Ramírez Torres',
      clienteAvatar: 'https://i.pravatar.cc/150?img=12',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Hola, quisiera saber si tienen disponibilidad para el 20 de mayo de 2026. Somos aproximadamente 150 personas.',
          fecha: new Date('2025-12-26T10:15:00'),
          leido: true
        },
        {
          id: 2,
          autor: 'proveedor',
          texto: 'Buenas tardes Carlos, muchas gracias por contactarnos. Sí tenemos disponibilidad para esa fecha. Le enviaré la información completa a su WhatsApp.',
          fecha: new Date('2025-12-26T11:20:00'),
          leido: true
        }
      ],
      estado: 'respondida',
      fechaEvento: new Date('2026-05-20'),
      numeroInvitados: '120-180',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-26T11:20:00')
    },
    {
      id: 3,
      clienteNombre: 'Valentina Cruz Mendoza',
      clienteAvatar: 'https://i.pravatar.cc/150?img=5',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: '¡Hola! Me gustaría saber los precios de sus servicios para una boda pequeña en septiembre.',
          fecha: new Date('2025-12-24T16:45:00'),
          leido: true
        },
        {
          id: 2,
          autor: 'proveedor',
          texto: 'Hola Valentina, gracias por escribirnos. Con gusto le envío nuestra lista de precios y opciones para eventos íntimos. ¿Me comparte su número de contacto?',
          fecha: new Date('2025-12-24T17:10:00'),
          leido: true
        }
      ],
      estado: 'respondida',
      fechaEvento: new Date('2026-09-12'),
      numeroInvitados: '30-60',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-24T17:10:00')
    },
    {
      id: 4,
      clienteNombre: 'Diego Fernández López',
      clienteAvatar: 'https://i.pravatar.cc/150?img=13',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Buenas, necesito cotización urgente para boda en marzo. Somos 200 invitados aproximadamente.',
          fecha: new Date('2025-12-23T09:20:00'),
          leido: true
        },
        {
          id: 2,
          autor: 'proveedor',
          texto: 'Buenos días Diego, perfecto. Le preparo la cotización y se la envío hoy en la tarde.',
          fecha: new Date('2025-12-23T10:15:00'),
          leido: true
        },
        {
          id: 3,
          autor: 'cliente',
          texto: 'Perfecto, ya nos decidimos por sus servicios. ¿Cómo procedemos con la reserva?',
          fecha: new Date('2025-12-27T15:30:00'),
          leido: true
        }
      ],
      estado: 'respondida',
      fechaEvento: new Date('2026-03-28'),
      numeroInvitados: '180+',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-27T15:30:00')
    },
    {
      id: 5,
      clienteNombre: 'Sofía Paredes Ruiz',
      clienteAvatar: 'https://i.pravatar.cc/150?img=9',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Hola, me podrían dar información sobre decoración para boda en jardín?',
          fecha: new Date('2025-12-22T13:00:00'),
          leido: true
        },
        {
          id: 2,
          autor: 'proveedor',
          texto: 'Claro que sí Sofía, tenemos varios paquetes para bodas al aire libre. ¿Para cuándo sería?',
          fecha: new Date('2025-12-22T14:30:00'),
          leido: true
        }
      ],
      estado: 'respondida',
      fechaEvento: new Date('2026-08-10'),
      numeroInvitados: '60-90',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-22T14:30:00')
    },
    {
      id: 6,
      clienteNombre: 'Gabriel Sánchez Vega',
      clienteAvatar: 'https://i.pravatar.cc/150?img=14',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Buenos días, queremos contratar sus servicios pero encontramos otra opción más económica.',
          fecha: new Date('2025-12-20T11:45:00'),
          leido: true
        }
      ],
      estado: 'descartada',
      fechaEvento: new Date('2026-06-18'),
      numeroInvitados: '90-120',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-20T11:45:00')
    },
    {
      id: 7,
      clienteNombre: 'Camila Rojas Castillo',
      clienteAvatar: 'https://i.pravatar.cc/150?img=10',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Hola! Nos casamos en octubre y buscamos un proveedor confiable. ¿Tienen referencias?',
          fecha: new Date('2025-12-21T18:20:00'),
          leido: true
        },
        {
          id: 2,
          autor: 'proveedor',
          texto: 'Hola Camila! Claro, con gusto le compartimos nuestro portfolio y testimonios de parejas anteriores.',
          fecha: new Date('2025-12-21T19:00:00'),
          leido: true
        }
      ],
      estado: 'respondida',
      fechaEvento: new Date('2026-10-24'),
      numeroInvitados: '120-150',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-21T19:00:00')
    },
    {
      id: 8,
      clienteNombre: 'Alejandro Morales Díaz',
      clienteAvatar: 'https://i.pravatar.cc/150?img=15',
      mensajes: [
        {
          id: 1,
          autor: 'cliente',
          texto: 'Me interesa su servicio premium. ¿Incluye coordinación el día del evento?',
          fecha: new Date('2025-12-25T12:30:00'),
          leido: true
        },
        {
          id: 2,
          autor: 'proveedor',
          texto: 'Así es Alejandro, el paquete premium incluye coordinación completa desde el ensayo hasta el final de la recepción.',
          fecha: new Date('2025-12-25T13:45:00'),
          leido: true
        },
        {
          id: 3,
          autor: 'cliente',
          texto: 'Perfecto, confirmamos la contratación. Ya hicimos la transferencia de la señal.',
          fecha: new Date('2025-12-26T16:20:00'),
          leido: true
        }
      ],
      estado: 'respondida',
      fechaEvento: new Date('2026-04-15'),
      numeroInvitados: '150+',
      leida: true,
      archivada: false,
      fechaUltimoMensaje: new Date('2025-12-26T16:20:00')
    }
  ];

  carpetaActual: 'todas' | 'no-leidas' | 'leidas' | 'archivadas' | 'pendientes' | 'respondidas' | 'descartadas' = 'todas';
  terminoBusqueda = '';
  seleccionarTodas = false;
  solicitudesSeleccionadas: number[] = [];

  get solicitudesFiltradas(): Solicitud[] {
    let filtradas = [...this.solicitudes];

    // Filtrar por carpeta
    switch (this.carpetaActual) {
      case 'no-leidas':
        filtradas = filtradas.filter(s => !s.leida);
        break;
      case 'leidas':
        filtradas = filtradas.filter(s => s.leida);
        break;
      case 'archivadas':
        filtradas = filtradas.filter(s => s.archivada);
        break;
      case 'pendientes':
        filtradas = filtradas.filter(s => s.estado === 'pendiente');
        break;
      case 'respondidas':
        filtradas = filtradas.filter(s => s.estado === 'respondida');
        break;
      case 'descartadas':
        filtradas = filtradas.filter(s => s.estado === 'descartada');
        break;
    }

    // Filtrar por búsqueda
    if (this.terminoBusqueda) {
      const termino = this.terminoBusqueda.toLowerCase();
      filtradas = filtradas.filter(s =>
        s.clienteNombre.toLowerCase().includes(termino) ||
        s.mensajes.some(m => m.texto.toLowerCase().includes(termino))
      );
    }

    // Ordenar por fecha más reciente
    return filtradas.sort((a, b) => b.fechaUltimoMensaje.getTime() - a.fechaUltimoMensaje.getTime());
  }

  get totalSolicitudes(): number {
    return this.solicitudes.length;
  }

  get noLeidas(): number {
    return this.solicitudes.filter(s => !s.leida).length;
  }

  get leidas(): number {
    return this.solicitudes.filter(s => s.leida).length;
  }

  get archivadas(): number {
    return this.solicitudes.filter(s => s.archivada).length;
  }

  get pendientes(): number {
    return this.solicitudes.filter(s => s.estado === 'pendiente').length;
  }

  get respondidas(): number {
    return this.solicitudes.filter(s => s.estado === 'respondida').length;
  }

  get descartadas(): number {
    return this.solicitudes.filter(s => s.estado === 'descartada').length;
  }

  get tiempoRespuestaPromedio(): string {
    const respondidas = this.solicitudes.filter(s => s.mensajes.length > 1);
    if (respondidas.length === 0) return '0h 0m';

    let totalMinutos = 0;
    respondidas.forEach(s => {
      const primerMensaje = s.mensajes[0];
      const respuesta = s.mensajes.find(m => m.autor === 'proveedor');
      if (respuesta) {
        const diff = respuesta.fecha.getTime() - primerMensaje.fecha.getTime();
        totalMinutos += diff / (1000 * 60);
      }
    });

    const promedioMinutos = totalMinutos / respondidas.length;
    const horas = Math.floor(promedioMinutos / 60);
    const minutos = Math.floor(promedioMinutos % 60);

    return `${horas}h ${minutos}m`;
  }

  cambiarCarpeta(carpeta: typeof this.carpetaActual): void {
    this.carpetaActual = carpeta;
    this.seleccionarTodas = false;
    this.solicitudesSeleccionadas = [];
  }

  toggleSeleccionarTodas(): void {
    if (this.seleccionarTodas) {
      this.solicitudesSeleccionadas = this.solicitudesFiltradas.map(s => s.id);
    } else {
      this.solicitudesSeleccionadas = [];
    }
  }

  toggleSeleccion(id: number): void {
    const index = this.solicitudesSeleccionadas.indexOf(id);
    if (index > -1) {
      this.solicitudesSeleccionadas.splice(index, 1);
    } else {
      this.solicitudesSeleccionadas.push(id);
    }
    this.seleccionarTodas = this.solicitudesSeleccionadas.length === this.solicitudesFiltradas.length;
  }

  marcarComoLeida(solicitud: Solicitud): void {
    solicitud.leida = true;
  }

  getUltimoMensaje(solicitud: Solicitud): Mensaje {
    return solicitud.mensajes[solicitud.mensajes.length - 1];
  }

  getExtractoMensaje(mensaje: string): string {
    return mensaje.length > 80 ? mensaje.substring(0, 80) + '...' : mensaje;
  }

  getMesEvento(fecha: Date): string {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[fecha.getMonth()];
  }

  getAnioEvento(fecha: Date): number {
    return fecha.getFullYear();
  }

  getTiempoTranscurrido(fecha: Date): string {
    const ahora = new Date();
    const diff = ahora.getTime() - fecha.getTime();
    const minutos = Math.floor(diff / (1000 * 60));
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (dias > 0) return `${dias}d`;
    if (horas > 0) return `${horas}h`;
    return `${minutos}m`;
  }

  getEstadoBadgeClass(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'badge-warning';
      case 'respondida': return 'badge-info';
      case 'descartada': return 'badge-secondary';
      default: return 'badge-light';
    }
  }

  getEstadoTexto(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'Pendiente';
      case 'respondida': return 'Respondida';
      case 'descartada': return 'Descartada';
      default: return estado;
    }
  }

  exportarExcel(): void {
    alert('Función de exportación a Excel - Implementar con librería de Excel');
  }
}
