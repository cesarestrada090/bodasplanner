import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  id: number;
  autor: 'usuario' | 'ia';
  texto: string;
  timestamp: Date;
}

@Component({
  selector: 'app-soporte-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte-chat.component.html',
  styleUrl: './soporte-chat.component.scss'
})
export class SoporteChatComponent {
  mensajeInput = '';
  conversacion: Mensaje[] = [
    {
      id: 1,
      autor: 'ia',
      texto: '¡Hola! Soy el asistente virtual de BodásPlanner. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ];

  enviarMensaje() {
    if (!this.mensajeInput.trim()) return;

    // Agregar mensaje del usuario
    this.conversacion.push({
      id: this.conversacion.length + 1,
      autor: 'usuario',
      texto: this.mensajeInput,
      timestamp: new Date()
    });

    const mensajeUsuario = this.mensajeInput;
    this.mensajeInput = '';

    // Simular respuesta de la IA después de 1 segundo
    setTimeout(() => {
      this.conversacion.push({
        id: this.conversacion.length + 1,
        autor: 'ia',
        texto: this.generarRespuestaIA(mensajeUsuario),
        timestamp: new Date()
      });
    }, 1000);
  }

  generarRespuestaIA(mensaje: string): string {
    const mensajeLower = mensaje.toLowerCase();
    
    if (mensajeLower.includes('precio') || mensajeLower.includes('costo') || mensajeLower.includes('plan')) {
      return 'Contamos con diferentes planes adaptados a tus necesidades. Puedes consultar la sección de Facturación para ver tu plan actual. ¿Necesitas información sobre algún plan específico?';
    }
    
    if (mensajeLower.includes('foto') || mensajeLower.includes('imagen') || mensajeLower.includes('galería')) {
      return 'Para gestionar tus fotos y videos, ve a Mi Vitrina > Fotos y Videos. Ahí podrás subir, organizar y eliminar tus imágenes. ¿Necesitas ayuda con algo más específico?';
    }
    
    if (mensajeLower.includes('solicitud') || mensajeLower.includes('cliente') || mensajeLower.includes('contacto')) {
      return 'Puedes gestionar todas tus solicitudes de clientes en la sección "Mis Solicitudes". Allí podrás ver, responder y organizar todos los mensajes. ¿Tienes alguna duda específica sobre una solicitud?';
    }
    
    if (mensajeLower.includes('opinion') || mensajeLower.includes('reseña') || mensajeLower.includes('valoración')) {
      return 'En la sección Opiniones puedes solicitar reseñas a tus clientes y gestionar las valoraciones recibidas. ¿Quieres que te explique cómo enviar solicitudes de opiniones?';
    }
    
    return 'Entiendo tu consulta. Para ayudarte mejor, puedes consultar nuestro Manual de Usuario o contactarnos a través del Formulario de Contacto. ¿Hay algo más específico en lo que pueda ayudarte?';
  }

  formatearHora(fecha: Date): string {
    return new Date(fecha).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
