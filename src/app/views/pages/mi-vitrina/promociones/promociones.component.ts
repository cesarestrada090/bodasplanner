import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

interface PromoCode {
  id: number;
  codigo: string;
  descripcion: string;
  descuento: number;
  tipoDescuento: 'porcentaje' | 'monto-fijo';
  usos: number;
  usosMaximos: number;
  fechaInicio: string;
  fechaFin: string;
  activo: boolean;
}

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbNavModule],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.scss'
})
export class PromocionesComponent {

  activeTab = 1;

  // Descuento exclusivo del portal
  descuentoPortal = {
    activo: true,
    porcentaje: 10
  };

  porcentajesDisponibles = [3, 5, 10, 15, 20, 30];

  // Promo codes
  promoCodes: PromoCode[] = [
    {
      id: 1,
      codigo: 'BODA2025',
      descripcion: 'Promoción especial para bodas en 2025',
      descuento: 15,
      tipoDescuento: 'porcentaje',
      usos: 12,
      usosMaximos: 50,
      fechaInicio: '2025-01-01',
      fechaFin: '2025-12-31',
      activo: true
    },
    {
      id: 2,
      codigo: 'VERANO500',
      descripcion: 'Descuento fijo para temporada de verano',
      descuento: 500,
      tipoDescuento: 'monto-fijo',
      usos: 5,
      usosMaximos: 20,
      fechaInicio: '2025-12-01',
      fechaFin: '2026-03-31',
      activo: true
    },
    {
      id: 3,
      codigo: 'PRIMERAVEZ',
      descripcion: 'Para clientes que contratan por primera vez',
      descuento: 20,
      tipoDescuento: 'porcentaje',
      usos: 8,
      usosMaximos: 100,
      fechaInicio: '2025-01-01',
      fechaFin: '2025-12-31',
      activo: false
    }
  ];

  siguienteId = 4;
  promoCodeEditando: PromoCode | null = null;
  mostrandoFormulario = false;

  nuevoPromoCode: PromoCode = this.crearPromoCodeVacio();

  crearPromoCodeVacio(): PromoCode {
    return {
      id: 0,
      codigo: '',
      descripcion: '',
      descuento: 0,
      tipoDescuento: 'porcentaje',
      usos: 0,
      usosMaximos: 0,
      fechaInicio: '',
      fechaFin: '',
      activo: true
    };
  }

  toggleDescuentoPortal(): void {
    this.descuentoPortal.activo = !this.descuentoPortal.activo;
    if (!this.descuentoPortal.activo) {
      this.descuentoPortal.porcentaje = 0;
    }
  }

  seleccionarPorcentaje(porcentaje: number): void {
    this.descuentoPortal.porcentaje = porcentaje;
    if (!this.descuentoPortal.activo) {
      this.descuentoPortal.activo = true;
    }
  }

  mostrarFormularioNuevo(): void {
    this.nuevoPromoCode = this.crearPromoCodeVacio();
    this.promoCodeEditando = null;
    this.mostrandoFormulario = true;
  }

  editarPromoCode(promoCode: PromoCode): void {
    this.nuevoPromoCode = { ...promoCode };
    this.promoCodeEditando = promoCode;
    this.mostrandoFormulario = true;
  }

  cancelarEdicion(): void {
    this.mostrandoFormulario = false;
    this.promoCodeEditando = null;
    this.nuevoPromoCode = this.crearPromoCodeVacio();
  }

  guardarPromoCode(): void {
    if (!this.validarPromoCode()) {
      return;
    }

    if (this.promoCodeEditando) {
      // Editar existente
      const index = this.promoCodes.findIndex(p => p.id === this.promoCodeEditando!.id);
      if (index !== -1) {
        this.promoCodes[index] = { ...this.nuevoPromoCode };
      }
    } else {
      // Crear nuevo
      this.nuevoPromoCode.id = this.siguienteId++;
      this.promoCodes.push({ ...this.nuevoPromoCode });
    }

    this.cancelarEdicion();
    alert('✓ Código promocional guardado correctamente');
  }

  eliminarPromoCode(id: number): void {
    if (confirm('¿Estás seguro de eliminar este código promocional?')) {
      this.promoCodes = this.promoCodes.filter(p => p.id !== id);
      alert('✓ Código promocional eliminado');
    }
  }

  toggleEstadoPromoCode(promoCode: PromoCode): void {
    promoCode.activo = !promoCode.activo;
  }

  validarPromoCode(): boolean {
    if (!this.nuevoPromoCode.codigo.trim()) {
      alert('⚠ El código es requerido');
      return false;
    }
    if (this.nuevoPromoCode.descuento <= 0) {
      alert('⚠ El descuento debe ser mayor a 0');
      return false;
    }
    if (this.nuevoPromoCode.tipoDescuento === 'porcentaje' && this.nuevoPromoCode.descuento > 100) {
      alert('⚠ El porcentaje no puede ser mayor a 100');
      return false;
    }
    return true;
  }

  generarCodigoAleatorio(): void {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 8; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    this.nuevoPromoCode.codigo = codigo;
  }

  get promoCodesActivos(): number {
    return this.promoCodes.filter(p => p.activo).length;
  }

  get totalUsos(): number {
    return this.promoCodes.reduce((sum, p) => sum + p.usos, 0);
  }

  guardarCambios(): void {
    console.log('Guardando cambios:', {
      descuentoPortal: this.descuentoPortal,
      promoCodes: this.promoCodes
    });
    alert('✓ Promociones guardadas correctamente');
  }
}
