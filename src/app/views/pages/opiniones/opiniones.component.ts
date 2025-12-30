import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Destinatario {
  nombre: string;
  email: string;
}

interface PeticionOpinion {
  id: number;
  nombre: string;
  email: string;
  fechaEnvio: Date;
  numeroEnvios: number;
  atendida: boolean;
  conFoto: boolean;
}

@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './opiniones.component.html',
  styleUrl: './opiniones.component.scss'
})
export class OpinionesComponent {
  // Estadísticas
  opinionesConseguidas = 0;
  peticionesEnviadas = 7;
  sinContestar = 7;
  sinFoto = 0;

  // Formulario
  nuevoDestinatario: Destinatario = { nombre: '', email: '' };
  destinatarios: Destinatario[] = [];
  emailCC = 'gerencia@bodasplanner.com';
  plantillaSeleccionada = 'default';
  mensaje = `Hola [Nombre]

Fue un placer participar contigo en el matrimonio. ¡Gracias por confiar en nosotros!
Nos encantaría que compartieras tu experiencia con el resto de novios de bodasplanner.com para ayudarlos a organizar su matrimonio. 🌹💖

Muchas gracias y saludos, 😊

El equipo de Bodas Planner

Un saludo,
Bodas Planner
Haz click aquí para escribir tu opinión: [Enlace de acceso]`;

  // Enlace compartible
  enlaceCompartible = 'https://www.bodasplanner.com/shared/rate/118866';
  
  // Peticiones enviadas
  filtroActual: 'todas' | 'no-atendidas' = 'todas';
  peticiones: PeticionOpinion[] = [
    {
      id: 1,
      nombre: 'PILAR CASTRO',
      email: 'pilar.castro@email.com',
      fechaEnvio: new Date('2025-02-13'),
      numeroEnvios: 1,
      atendida: false,
      conFoto: false
    },
    {
      id: 2,
      nombre: 'Cecilia Correa',
      email: 'cecilia.correa@email.com',
      fechaEnvio: new Date('2022-07-19'),
      numeroEnvios: 2,
      atendida: false,
      conFoto: false
    },
    {
      id: 3,
      nombre: 'Viviana Mujica',
      email: 'viviana.mujica@email.com',
      fechaEnvio: new Date('2022-07-19'),
      numeroEnvios: 2,
      atendida: false,
      conFoto: false
    },
    {
      id: 4,
      nombre: 'John Seminario',
      email: 'john.seminario@email.com',
      fechaEnvio: new Date('2022-06-30'),
      numeroEnvios: 1,
      atendida: false,
      conFoto: false
    },
    {
      id: 5,
      nombre: 'KARIN',
      email: 'karin@email.com',
      fechaEnvio: new Date('2022-06-16'),
      numeroEnvios: 2,
      atendida: false,
      conFoto: false
    },
    {
      id: 6,
      nombre: 'Patricia Acaro',
      email: 'patricia.acaro@email.com',
      fechaEnvio: new Date('2022-06-06'),
      numeroEnvios: 2,
      atendida: false,
      conFoto: false
    },
    {
      id: 7,
      nombre: 'Diana',
      email: 'diana@email.com',
      fechaEnvio: new Date('2022-05-26'),
      numeroEnvios: 1,
      atendida: false,
      conFoto: false
    }
  ];

  plantillas = [
    { id: 'default', nombre: 'Plantilla por defecto' },
    { id: 'corta', nombre: 'Mensaje corto' },
    { id: 'formal', nombre: 'Mensaje formal' }
  ];

  get peticionesFiltradas(): PeticionOpinion[] {
    if (this.filtroActual === 'no-atendidas') {
      return this.peticiones.filter(p => !p.atendida);
    }
    return this.peticiones;
  }

  agregarDestinatario() {
    if (this.nuevoDestinatario.nombre && this.nuevoDestinatario.email) {
      this.destinatarios.push({ ...this.nuevoDestinatario });
      this.nuevoDestinatario = { nombre: '', email: '' };
    }
  }

  eliminarDestinatario(index: number) {
    this.destinatarios.splice(index, 1);
  }

  enviarPeticiones() {
    if (this.destinatarios.length === 0) {
      alert('Debes añadir al menos un destinatario');
      return;
    }

    console.log('Enviando peticiones a:', this.destinatarios);
    console.log('Mensaje:', this.mensaje);
    alert(`Se enviarán ${this.destinatarios.length} peticiones de opinión`);
  }

  copiarEnlace() {
    navigator.clipboard.writeText(this.enlaceCompartible).then(() => {
      alert('Enlace copiado al portapapeles');
    });
  }

  guardarComoPlantilla() {
    console.log('Guardando plantilla:', this.mensaje);
    alert('Plantilla guardada correctamente');
  }

  reenviarPeticion(peticion: PeticionOpinion) {
    console.log('Reenviando petición a:', peticion.nombre);
    peticion.numeroEnvios++;
    peticion.fechaEnvio = new Date();
    alert(`Petición reenviada a ${peticion.nombre}`);
  }

  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  getIniciales(nombre: string): string {
    const palabras = nombre.trim().split(' ');
    if (palabras.length >= 2) {
      return (palabras[0][0] + palabras[1][0]).toUpperCase();
    }
    return nombre.substring(0, 2).toUpperCase();
  }
}
