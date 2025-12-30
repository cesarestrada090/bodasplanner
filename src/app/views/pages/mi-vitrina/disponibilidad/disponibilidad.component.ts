import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface EventoReserva {
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  cliente: string;
  tipoEvento: string;
  contratoRef?: string;
  notas?: string;
}

interface DiaCalendario {
  fecha: Date;
  numero: number;
  mesActual: boolean;
  ocupado: boolean;
  evento?: EventoReserva;
}

interface MesCalendario {
  mes: number;
  anio: number;
  nombre: string;
  dias: DiaCalendario[];
}

@Component({
  selector: 'app-disponibilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disponibilidad.component.html',
  styleUrl: './disponibilidad.component.scss'
})
export class DisponibilidadComponent {
  private modalService = inject(NgbModal);
  
  meses: MesCalendario[] = [];
  diaSeleccionado: DiaCalendario | null = null;
  
  // Eventos reservados (algunos ejemplos)
  eventosReservados: EventoReserva[] = [
    {
      fecha: new Date(2026, 0, 8), // 8 enero 2026
      horaInicio: '18:00',
      horaFin: '23:00',
      cliente: 'María & Juan López',
      tipoEvento: 'Boda',
      contratoRef: 'BOD-2026-001',
      notas: 'Ceremonia y recepción completa'
    },
    {
      fecha: new Date(2026, 0, 17), // 17 enero 2026
      horaInicio: '14:00',
      horaFin: '18:00',
      cliente: 'Ana García',
      tipoEvento: 'Baby Shower',
      contratoRef: 'BSH-2026-002',
      notas: 'Decoración temática rosa'
    },
    {
      fecha: new Date(2026, 0, 24), // 24 enero 2026
      horaInicio: '19:00',
      horaFin: '01:00',
      cliente: 'Carlos & Sofia Ramírez',
      tipoEvento: 'Boda',
      contratoRef: 'BOD-2026-003',
      notas: 'Boda de fin de semana'
    },
    {
      fecha: new Date(2026, 1, 7), // 7 febrero 2026
      horaInicio: '12:00',
      horaFin: '17:00',
      cliente: 'Roberto Mendoza',
      tipoEvento: 'Aniversario',
      contratoRef: 'ANV-2026-004',
      notas: '25 años de matrimonio'
    },
    {
      fecha: new Date(2026, 1, 14), // 14 febrero 2026
      horaInicio: '17:00',
      horaFin: '22:00',
      cliente: 'Laura & Diego Torres',
      tipoEvento: 'Boda',
      contratoRef: 'BOD-2026-005',
      notas: 'Especial San Valentín'
    },
    {
      fecha: new Date(2026, 1, 28), // 28 febrero 2026
      horaInicio: '15:00',
      horaFin: '20:00',
      cliente: 'Patricia Vargas',
      tipoEvento: 'Quinceañera',
      contratoRef: 'QUI-2026-006',
      notas: 'Fiesta temática princesa'
    },
    {
      fecha: new Date(2026, 2, 14), // 14 marzo 2026
      horaInicio: '18:30',
      horaFin: '23:30',
      cliente: 'Miguel & Carmen Silva',
      tipoEvento: 'Boda',
      contratoRef: 'BOD-2026-007',
      notas: 'Recepción elegante'
    },
    {
      fecha: new Date(2026, 2, 21), // 21 marzo 2026
      horaInicio: '13:00',
      horaFin: '18:00',
      cliente: 'Empresa Tech Solutions',
      tipoEvento: 'Evento Corporativo',
      contratoRef: 'COR-2026-008',
      notas: 'Celebración anual'
    },
    {
      fecha: new Date(2026, 3, 11), // 11 abril 2026
      horaInicio: '11:00',
      horaFin: '16:00',
      cliente: 'Rosa & Pedro Castillo',
      tipoEvento: 'Boda',
      contratoRef: 'BOD-2026-009',
      notas: 'Ceremonia y almuerzo'
    },
    {
      fecha: new Date(2026, 3, 25), // 25 abril 2026
      horaInicio: '19:00',
      horaFin: '00:00',
      cliente: 'Isabel Morales',
      tipoEvento: 'Graduación',
      contratoRef: 'GRA-2026-010',
      notas: 'Fiesta de gala'
    },
    {
      fecha: new Date(2026, 4, 9), // 9 mayo 2026
      horaInicio: '16:00',
      horaFin: '22:00',
      cliente: 'Andrea & Luis Fernández',
      tipoEvento: 'Boda',
      contratoRef: 'BOD-2026-011',
      notas: 'Boda de primavera'
    },
    {
      fecha: new Date(2026, 4, 23), // 23 mayo 2026
      horaInicio: '14:00',
      horaFin: '19:00',
      cliente: 'Familia Rojas',
      tipoEvento: 'Reunión Familiar',
      contratoRef: 'FAM-2026-012',
      notas: 'Celebración especial'
    }
  ];

  diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  constructor() {
    this.generarCalendarios();
  }

  generarCalendarios(): void {
    const hoy = new Date();
    const mesActual = hoy.getMonth();
    const anioActual = hoy.getFullYear();

    // Generar 6 meses desde el mes actual
    for (let i = 0; i < 6; i++) {
      const fecha = new Date(anioActual, mesActual + i, 1);
      const mes = fecha.getMonth();
      const anio = fecha.getFullYear();
      
      this.meses.push({
        mes,
        anio,
        nombre: this.getNombreMes(mes) + ' ' + anio,
        dias: this.generarDiasMes(mes, anio)
      });
    }
  }

  generarDiasMes(mes: number, anio: number): DiaCalendario[] {
    const dias: DiaCalendario[] = [];
    const primerDia = new Date(anio, mes, 1);
    const ultimoDia = new Date(anio, mes + 1, 0);
    const diasMes = ultimoDia.getDate();
    const diaSemanaInicio = primerDia.getDay();

    // Días del mes anterior (para completar la primera semana)
    const ultimoDiaMesAnterior = new Date(anio, mes, 0).getDate();
    for (let i = diaSemanaInicio - 1; i >= 0; i--) {
      const numero = ultimoDiaMesAnterior - i;
      const fecha = new Date(anio, mes - 1, numero);
      dias.push({
        fecha,
        numero,
        mesActual: false,
        ocupado: false
      });
    }

    // Días del mes actual
    for (let i = 1; i <= diasMes; i++) {
      const fecha = new Date(anio, mes, i);
      const evento = this.getEventoPorFecha(fecha);
      dias.push({
        fecha,
        numero: i,
        mesActual: true,
        ocupado: !!evento,
        evento
      });
    }

    // Días del mes siguiente (para completar la última semana)
    const diasRestantes = 42 - dias.length; // 6 semanas * 7 días
    for (let i = 1; i <= diasRestantes; i++) {
      const fecha = new Date(anio, mes + 1, i);
      dias.push({
        fecha,
        numero: i,
        mesActual: false,
        ocupado: false
      });
    }

    return dias;
  }

  getEventoPorFecha(fecha: Date): EventoReserva | undefined {
    return this.eventosReservados.find(evento => 
      evento.fecha.getDate() === fecha.getDate() &&
      evento.fecha.getMonth() === fecha.getMonth() &&
      evento.fecha.getFullYear() === fecha.getFullYear()
    );
  }

  getNombreMes(mes: number): string {
    const nombres = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return nombres[mes];
  }

  seleccionarDia(dia: DiaCalendario, content: any): void {
    if (dia.ocupado && dia.mesActual) {
      this.diaSeleccionado = dia;
      this.modalService.open(content, { centered: true, size: 'lg' });
    }
  }

  get totalDiasOcupados(): number {
    return this.eventosReservados.length;
  }

  get diasDisponibles(): number {
    // Calcular días disponibles en los próximos 6 meses
    const hoy = new Date();
    const seisMAdelante = new Date();
    seisMAdelante.setMonth(seisMAdelante.getMonth() + 6);
    
    const diasTotales = Math.floor((seisMAdelante.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    return diasTotales - this.eventosReservados.length;
  }
}
