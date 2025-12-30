import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-soporte-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte-contacto.component.html',
  styleUrl: './soporte-contacto.component.scss'
})
export class SoporteContactoComponent {
  formulario = {
    nombre: '',
    email: '',
    asunto: '',
    prioridad: 'media',
    categoria: 'general',
    mensaje: ''
  };

  enviadoExitoso = false;

  categorias = [
    { value: 'general', label: 'Consulta general' },
    { value: 'tecnico', label: 'Problema técnico' },
    { value: 'facturacion', label: 'Facturación' },
    { value: 'cuenta', label: 'Gestión de cuenta' },
    { value: 'sugerencia', label: 'Sugerencia o mejora' }
  ];

  prioridades = [
    { value: 'baja', label: 'Baja' },
    { value: 'media', label: 'Media' },
    { value: 'alta', label: 'Alta' },
    { value: 'urgente', label: 'Urgente' }
  ];

  enviarFormulario() {
    if (!this.formulario.nombre || !this.formulario.email || !this.formulario.asunto || !this.formulario.mensaje) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    console.log('Enviando formulario de contacto:', this.formulario);

    this.enviadoExitoso = true;
    setTimeout(() => {
      this.enviadoExitoso = false;
      this.resetearFormulario();
    }, 3000);
  }

  resetearFormulario() {
    this.formulario = {
      nombre: '',
      email: '',
      asunto: '',
      prioridad: 'media',
      categoria: 'general',
      mensaje: ''
    };
  }
}
