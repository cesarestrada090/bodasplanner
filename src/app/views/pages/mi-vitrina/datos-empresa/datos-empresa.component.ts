import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-empresa',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './datos-empresa.component.html',
  styleUrl: './datos-empresa.component.scss'
})
export class DatosEmpresaComponent implements OnInit {

  // Datos mockeados
  datosEmpresa = {
    usuario: 'bodasdeensueño',
    descripcion: 'Bodas de Ensueño es una empresa líder en organización de eventos nupciales con más de 15 años de experiencia. Especializada en crear celebraciones únicas y memorables, cuenta con un equipo profesional dedicado a hacer realidad cada detalle soñado por las parejas. La empresa se distingue por su atención personalizada, creatividad en el diseño de eventos y compromiso con la excelencia en cada ceremonia.',
    contacto: {
      nombre: 'Isabella Martínez',
      email: 'contacto@bodasdeensueno.com',
      telefono: {
        codigo: 'PE (+51)',
        numero: '987654321'
      },
      celular: {
        codigo: 'PE (+51)',
        numero: '987654321'
      },
      fax: '',
      web: 'https://www.bodasdeensueno.com'
    }
  };

  mostrarCambioPassword = false;
  passwordActual = '';
  passwordNueva = '';
  passwordConfirmar = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleCambioPassword() {
    this.mostrarCambioPassword = !this.mostrarCambioPassword;
  }

  guardarDatos() {
    console.log('Guardando datos de empresa:', this.datosEmpresa);
    // Aquí iría la lógica para guardar los datos
    alert('Datos guardados exitosamente');
  }

  cambiarPassword() {
    if (this.passwordNueva !== this.passwordConfirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Cambiando contraseña...');
    // Aquí iría la lógica para cambiar la contraseña
    alert('Contraseña cambiada exitosamente');
    this.mostrarCambioPassword = false;
    this.passwordActual = '';
    this.passwordNueva = '';
    this.passwordConfirmar = '';
  }

  cancelarCambioPassword() {
    this.mostrarCambioPassword = false;
    this.passwordActual = '';
    this.passwordNueva = '';
    this.passwordConfirmar = '';
  }

  verEjemplo() {
    alert('Aquí se mostraría un ejemplo de ficha de empresa completa');
  }

}
