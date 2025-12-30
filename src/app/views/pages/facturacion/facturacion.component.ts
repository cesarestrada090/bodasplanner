import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Factura {
  id: number;
  fecha: Date;
  numeroFactura: string;
  importe: number;
  moneda: string;
  anio: number;
  estado: 'pagada' | 'pendiente' | 'vencida';
  concepto: string;
}

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturacion.component.html',
  styleUrl: './facturacion.component.scss'
})
export class FacturacionComponent {
  anioSeleccionado: number = 2025;
  estadoSeleccionado: 'todas' | 'pagada' | 'pendiente' | 'vencida' = 'todas';

  facturas: Factura[] = [
    // 2025
    {
      id: 1,
      fecha: new Date('2025-11-15'),
      numeroFactura: 'BP-2025-0011',
      importe: 2850,
      moneda: 'S/',
      anio: 2025,
      estado: 'pagada',
      concepto: 'Plan Premium Anual'
    },
    {
      id: 2,
      fecha: new Date('2025-10-20'),
      numeroFactura: 'BP-2025-0010',
      importe: 1250,
      moneda: 'S/',
      anio: 2025,
      estado: 'pagada',
      concepto: 'Publicidad destacada'
    },
    {
      id: 3,
      fecha: new Date('2025-09-05'),
      numeroFactura: 'BP-2025-0009',
      importe: 3500,
      moneda: 'S/',
      anio: 2025,
      estado: 'vencida',
      concepto: 'Renovación anual'
    },
    {
      id: 4,
      fecha: new Date('2025-08-12'),
      numeroFactura: 'BP-2025-0008',
      importe: 890,
      moneda: 'S/',
      anio: 2025,
      estado: 'pagada',
      concepto: 'Galería adicional'
    },
    {
      id: 5,
      fecha: new Date('2025-07-28'),
      numeroFactura: 'BP-2025-0007',
      importe: 4200,
      moneda: 'S/',
      anio: 2025,
      estado: 'pendiente',
      concepto: 'Plan Premium + Destacado'
    },
    {
      id: 6,
      fecha: new Date('2025-06-10'),
      numeroFactura: 'BP-2025-0006',
      importe: 1980,
      moneda: 'S/',
      anio: 2025,
      estado: 'pagada',
      concepto: 'Pack fotografía profesional'
    },
    {
      id: 7,
      fecha: new Date('2025-05-22'),
      numeroFactura: 'BP-2025-0005',
      importe: 2100,
      moneda: 'S/',
      anio: 2025,
      estado: 'vencida',
      concepto: 'Destacado home 3 meses'
    },
    {
      id: 8,
      fecha: new Date('2025-03-18'),
      numeroFactura: 'BP-2025-0004',
      importe: 3200,
      moneda: 'S/',
      anio: 2025,
      estado: 'pagada',
      concepto: 'Plan Premium - Trimestral'
    },
    {
      id: 9,
      fecha: new Date('2025-02-08'),
      numeroFactura: 'BP-2025-0003',
      importe: 1650,
      moneda: 'S/',
      anio: 2025,
      estado: 'pendiente',
      concepto: 'Video promocional'
    },
    {
      id: 10,
      fecha: new Date('2025-01-12'),
      numeroFactura: 'BP-2025-0002',
      importe: 2950,
      moneda: 'S/',
      anio: 2025,
      estado: 'pagada',
      concepto: 'Plan Anual Completo'
    },
    // 2024
    {
      id: 11,
      fecha: new Date('2024-11-28'),
      numeroFactura: 'BP-2024-0012',
      importe: 2200,
      moneda: 'S/',
      anio: 2024,
      estado: 'pagada',
      concepto: 'Renovación mensual Premium'
    },
    {
      id: 12,
      fecha: new Date('2024-10-05'),
      numeroFactura: 'BP-2024-0011',
      importe: 1500,
      moneda: 'S/',
      anio: 2024,
      estado: 'pagada',
      concepto: 'Pack visibilidad'
    },
    {
      id: 13,
      fecha: new Date('2024-08-20'),
      numeroFactura: 'BP-2024-0010',
      importe: 3900,
      moneda: 'S/',
      anio: 2024,
      estado: 'pagada',
      concepto: 'Plan Completo + SEO'
    },
    {
      id: 14,
      fecha: new Date('2024-06-15'),
      numeroFactura: 'BP-2024-0009',
      importe: 1750,
      moneda: 'S/',
      anio: 2024,
      estado: 'pagada',
      concepto: 'Plan Estándar - 6 meses'
    },
    {
      id: 15,
      fecha: new Date('2024-04-05'),
      numeroFactura: 'BP-2024-0008',
      importe: 2400,
      moneda: 'S/',
      anio: 2024,
      estado: 'pagada',
      concepto: 'Renovación + Destacado'
    }
  ];

  get anios(): number[] {
    const aniosUnicos = [...new Set(this.facturas.map(f => f.anio))];
    return aniosUnicos.sort((a, b) => b - a);
  }

  get facturasFiltradas(): Factura[] {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado)
      .filter(f => this.estadoSeleccionado === 'todas' || f.estado === this.estadoSeleccionado)
      .sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  }

  get totalFacturado(): number {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado)
      .reduce((sum, f) => sum + f.importe, 0);
  }

  get facturasPagadas(): number {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado && f.estado === 'pagada')
      .length;
  }

  get facturasPendientes(): number {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado && f.estado === 'pendiente')
      .length;
  }

  get facturasVencidas(): number {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado && f.estado === 'vencida')
      .length;
  }

  get totalPendiente(): number {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado && f.estado === 'pendiente')
      .reduce((sum, f) => sum + f.importe, 0);
  }

  get totalVencido(): number {
    return this.facturas
      .filter(f => f.anio === this.anioSeleccionado && f.estado === 'vencida')
      .reduce((sum, f) => sum + f.importe, 0);
  }

  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  formatearImporte(importe: number, moneda: string): string {
    return `${moneda}${importe.toLocaleString('es-PE')}`;
  }

  descargarFactura(factura: Factura) {
    console.log('Descargando factura:', factura.numeroFactura);
    alert(`Descargando factura ${factura.numeroFactura}`);
  }
}
