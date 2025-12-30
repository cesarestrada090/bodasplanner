import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface PlantillaRespuesta {
  id: number;
  nombre: string;
  asunto: string;
  mensaje: string;
  fechaCreacion: Date;
  porDefecto: boolean;
  visible: boolean;
}

@Component({
  selector: 'app-solicitudes-plantillas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitudes-plantillas.component.html',
  styleUrl: './solicitudes-plantillas.component.scss'
})
export class SolicitudesPlantillasComponent {
  plantillas: PlantillaRespuesta[] = [
    {
      id: 1,
      nombre: 'Buenos días, Paola, soy',
      asunto: 'Respuesta a tu solicitud',
      mensaje: 'Buenos días Paola,\n\nMuchas gracias por contactar con nosotros. Hemos recibido tu solicitud y estamos encantados de poder ayudarte en la organización de tu boda.\n\nNos gustaría concertar una reunión contigo para conocer mejor tus necesidades y poder ofrecerte un presupuesto personalizado.\n\n¿Te vendría bien que nos viéramos esta semana?\n\nQuedo a la espera de tu respuesta.\n\nUn saludo,\nEquipo Bodas Planner',
      fechaCreacion: new Date('2025-05-28'),
      porDefecto: true,
      visible: true
    },
    {
      id: 2,
      nombre: 'ESTIMADA NOVIA',
      asunto: 'Información sobre nuestros servicios',
      mensaje: 'Estimada novia,\n\nGracias por pensar en nosotros para tu gran día. En Bodas Planner contamos con más de 10 años de experiencia organizando bodas inolvidables.\n\nTe ofrecemos:\n• Coordinación completa del evento\n• Asesoramiento personalizado\n• Gestión de proveedores\n• Diseño y decoración\n\nEstaremos encantados de ayudarte a hacer realidad la boda de tus sueños.\n\nSaludos cordiales,\nEquipo Bodas Planner',
      fechaCreacion: new Date('2024-06-21'),
      porDefecto: false,
      visible: true
    }
  ];

  // Form
  mostrarFormulario = false;
  editando = false;
  plantillaActual: PlantillaRespuesta = this.nuevaPlantillaVacia();

  constructor(private modalService: NgbModal) {}

  nuevaPlantillaVacia(): PlantillaRespuesta {
    return {
      id: 0,
      nombre: '',
      asunto: '',
      mensaje: '',
      fechaCreacion: new Date(),
      porDefecto: false,
      visible: true
    };
  }

  get plantillasVisibles(): PlantillaRespuesta[] {
    return this.plantillas.filter(p => p.visible);
  }

  get plantillasOcultas(): PlantillaRespuesta[] {
    return this.plantillas.filter(p => !p.visible);
  }

  abrirFormularioNueva() {
    this.editando = false;
    this.plantillaActual = this.nuevaPlantillaVacia();
    this.mostrarFormulario = true;
  }

  editarPlantilla(plantilla: PlantillaRespuesta) {
    this.editando = true;
    this.plantillaActual = { ...plantilla };
    this.mostrarFormulario = true;
  }

  guardarPlantilla() {
    if (!this.plantillaActual.nombre || !this.plantillaActual.asunto || !this.plantillaActual.mensaje) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (this.editando) {
      const index = this.plantillas.findIndex(p => p.id === this.plantillaActual.id);
      if (index !== -1) {
        this.plantillas[index] = { ...this.plantillaActual };
      }
    } else {
      const nuevoId = Math.max(...this.plantillas.map(p => p.id), 0) + 1;
      this.plantillaActual.id = nuevoId;
      this.plantillaActual.fechaCreacion = new Date();
      this.plantillas.unshift({ ...this.plantillaActual });
    }

    this.cancelarEdicion();
  }

  cancelarEdicion() {
    this.mostrarFormulario = false;
    this.editando = false;
    this.plantillaActual = this.nuevaPlantillaVacia();
  }

  eliminarPlantilla(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta plantilla?')) {
      this.plantillas = this.plantillas.filter(p => p.id !== id);
    }
  }

  toggleVisibilidad(id: number) {
    const plantilla = this.plantillas.find(p => p.id === id);
    if (plantilla) {
      plantilla.visible = !plantilla.visible;
    }
  }

  establecerPorDefecto(id: number) {
    this.plantillas.forEach(p => {
      p.porDefecto = p.id === id;
    });
  }

  duplicarPlantilla(plantilla: PlantillaRespuesta) {
    const nuevoId = Math.max(...this.plantillas.map(p => p.id), 0) + 1;
    const duplicada: PlantillaRespuesta = {
      ...plantilla,
      id: nuevoId,
      nombre: `${plantilla.nombre} (copia)`,
      fechaCreacion: new Date(),
      porDefecto: false
    };
    this.plantillas.unshift(duplicada);
  }

  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}
