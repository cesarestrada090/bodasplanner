import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SeccionManual {
  id: string;
  titulo: string;
  icono: string;
  subsecciones: {
    titulo: string;
    contenido: string;
  }[];
}

@Component({
  selector: 'app-soporte-manual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soporte-manual.component.html',
  styleUrl: './soporte-manual.component.scss'
})
export class SoporteManualComponent {
  seccionExpandida: string | null = 'vitrina';

  secciones: SeccionManual[] = [
    {
      id: 'vitrina',
      titulo: 'Mi Vitrina',
      icono: 'briefcase',
      subsecciones: [
        {
          titulo: 'Datos de empresa',
          contenido: 'Completa la información básica de tu empresa: nombre, descripción, categoría y servicios que ofreces. Esta información será visible para los clientes potenciales.'
        },
        {
          titulo: 'Fotos y Videos',
          contenido: 'Sube imágenes de calidad de tus trabajos anteriores. Recomendamos un mínimo de 10 fotos profesionales. Los formatos aceptados son JPG, PNG y MP4 para videos.'
        },
        {
          titulo: 'Localización',
          contenido: 'Añade tu dirección física y configura el mapa para que los clientes puedan encontrarte fácilmente. Puedes ajustar el punto exacto en el mapa interactivo.'
        }
      ]
    },
    {
      id: 'solicitudes',
      titulo: 'Mis Solicitudes',
      icono: 'inbox',
      subsecciones: [
        {
          titulo: 'Gestionar solicitudes',
          contenido: 'Revisa y responde las solicitudes de tus clientes. Es importante responder en menos de 24 horas para mantener una buena reputación.'
        },
        {
          titulo: 'Plantillas de respuesta',
          contenido: 'Crea plantillas para responder más rápido a consultas frecuentes. Puedes personalizar cada plantilla con variables como [Nombre] del cliente.'
        },
        {
          titulo: 'Configuración',
          contenido: 'Configura los emails donde recibirás notificaciones de nuevas solicitudes. Puedes añadir múltiples direcciones separadas por comas.'
        }
      ]
    },
    {
      id: 'opiniones',
      titulo: 'Opiniones',
      icono: 'star',
      subsecciones: [
        {
          titulo: 'Solicitar opiniones',
          contenido: 'Envía solicitudes de opinión a tus clientes después de completar un servicio. Las opiniones positivas aumentan tu visibilidad y credibilidad.'
        },
        {
          titulo: 'Gestionar opiniones',
          contenido: 'Responde a las opiniones de tus clientes, tanto positivas como negativas. Una respuesta profesional demuestra tu compromiso con la satisfacción del cliente.'
        }
      ]
    },
    {
      id: 'facturacion',
      titulo: 'Facturación',
      icono: 'credit-card',
      subsecciones: [
        {
          titulo: 'Consultar facturas',
          contenido: 'Descarga tus facturas en formato PDF. Todas las facturas incluyen el detalle de los servicios contratados y los métodos de pago utilizados.'
        },
        {
          titulo: 'Planes y servicios',
          contenido: 'Consulta tu plan actual y los servicios adicionales contratados. Puedes actualizar tu plan en cualquier momento contactando con soporte.'
        }
      ]
    }
  ];

  toggleSeccion(seccionId: string) {
    this.seccionExpandida = this.seccionExpandida === seccionId ? null : seccionId;
  }
}
