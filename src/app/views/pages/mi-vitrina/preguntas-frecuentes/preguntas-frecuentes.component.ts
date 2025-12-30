import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    NgbAccordionModule
  ],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.scss'
})
export class PreguntasFrecuentesComponent {

  faq = {
    // Precios y Capacidad
    precioMinimo: 5500,
    precioMaximo: 8200,
    tipoPrecio: 'total-dia', // 'total-dia' o 'por-menu'
    minimoInvitados: 80,
    maximoInvitados: 600,

    // Espacios disponibles
    espacios: {
      salon: true,
      pistaBaile: true,
      parqueo: true,
      capilla: false,
      cocinaCatering: true,
      piscina: false,
      terraza: true,
      jardin: true,
      toldo: false,
      otros: true
    },
    espaciosOtros: 'Salón principal (600 personas), Salón secundario (200 personas), Área lounge exterior con vista panorámica, Zona de juegos infantiles.',

    // Servicios ofrecidos
    servicios: {
      recepcion: true,
      ceremonia: true,
      fotografia: false,
      musica: false,
      transporte: false,
      decoracion: true,
      otros: true
    },
    serviciosOtros: 'Coordinación del evento, mobiliario premium, iluminación decorativa, DJ residente disponible, servicio de valet parking.',

    // Ubicación
    ubicacion: 'ciudad-afueras', // playa, cerca-mar, montana, campo, ciudad, ciudad-afueras
    
    // Alojamiento
    tieneAlojamiento: true,
    detalleAlojamiento: '4 suites para 16 personas en total. Convenio con hotel a 5 minutos para 40 personas adicionales.',

    // Eventos múltiples
    variosEventosDia: false,

    // Gastronomía
    incluyeMenuCompleto: true,
    detalleMenu: 'Entrada, plato de fondo, postre, bebidas (incluye vino y pisco), barra libre premium por 4 horas, bocaditos de bienvenida.',
    
    soloEspacio: true,
    tieneCateringPropio: true,
    
    tiposCocina: {
      criolla: true,
      internacional: true,
      nikkei: false,
      autor: true,
      fusion: true,
      otros: false
    },
    
    modificarMenus: true,
    
    menusEspeciales: {
      vegetarianos: true,
      celiacos: true,
      veganos: true,
      diabeticos: true,
      hipertensos: false,
      infantil: true,
      otros: false
    },
    
    sirveTorta: false,
    permiteLlevarTorta: true,
    recargoTorta: false,
    detalleRecargoTorta: 'Sin recargo. Incluimos el servicio de corte y distribución.',

    // Bebidas
    servicioBebidas: 'corcho-libre', // incluido-menu, cantidad-fija, corcho-libre, otro
    detalleBebidas: 'Barra libre premium incluida. Si desean licores especiales pueden traerlos sin cargo adicional.',

    // Restricciones
    limiteHora: false,
    detalleLimiteHora: 'Sin límite de hora. El evento puede extenderse hasta las 6 AM.',
    
    exclusividadFotografo: false,
    exclusividadMusica: false,
    exclusividadCatering: false,

    // Pagos
    pagoFijo: true,
    detallePagoFijo: 'S/ 5,500 por alquiler del local principal (hasta 600 personas). S/ 2,800 por salón secundario.',
    
    recargoMinimo: true,
    detalleRecargoMinimo: 'Si no se alcanza el mínimo de 80 invitados, se cobra el 70% del valor del paquete completo.',
    
    formaPago: 'Separación 30% al reservar, 40% un mes antes, saldo 30% una semana antes del evento. Transferencia bancaria o efectivo.',

    // Accesibilidad
    accesoDiscapacidad: true
  };

  guardarFAQ(): void {
    console.log('Guardando FAQ:', this.faq);
    alert('✓ Preguntas frecuentes actualizadas correctamente');
  }

  contarSeleccionados(objeto: any): number {
    return Object.values(objeto).filter(val => val === true).length;
  }
}
