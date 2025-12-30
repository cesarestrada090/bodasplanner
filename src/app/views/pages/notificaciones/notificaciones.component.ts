import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ConfiguracionNotificacion {
  id: string;
  titulo: string;
  descripcion: string;
  activa: boolean;
}

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss'
})
export class NotificacionesComponent {
  guardadoExitoso = false;

  notificaciones: ConfiguracionNotificacion[] = [
    {
      id: 'campus',
      titulo: 'Comunicaciones sobre contenido educativo de Campus',
      descripcion: 'Recibe información sobre cursos, talleres y recursos educativos disponibles.',
      activa: true
    },
    {
      id: 'formacion',
      titulo: 'Emails de formación durante la primera semana',
      descripcion: 'Guías paso a paso para aprovechar al máximo tu vitrina durante tus primeros días.',
      activa: true
    },
    {
      id: 'promocionales',
      titulo: 'Comunicaciones promocionales sobre nuestros productos/servicios, eventos, sorteos y descuentos exclusivos',
      descripcion: 'Mantente informado sobre ofertas especiales y oportunidades exclusivas.',
      activa: false
    },
    {
      id: 'solicitudes',
      titulo: 'Email de notificación para solicitudes pendientes de responder',
      descripcion: 'Recibe alertas cuando tengas solicitudes de clientes sin responder.',
      activa: true
    }
  ];

  guardarConfiguracion() {
    console.log('Guardando configuración de notificaciones:', this.notificaciones);
    
    this.guardadoExitoso = true;
    setTimeout(() => {
      this.guardadoExitoso = false;
    }, 3000);
  }
}
