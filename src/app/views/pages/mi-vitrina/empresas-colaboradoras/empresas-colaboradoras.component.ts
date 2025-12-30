import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EmpresaColaboradora {
  id: number;
  nombre: string;
  colaboraciones: number;
  categoria: string;
  foto: string;
  visible: boolean;
}

@Component({
  selector: 'app-empresas-colaboradoras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresas-colaboradoras.component.html',
  styleUrl: './empresas-colaboradoras.component.scss'
})
export class EmpresasColaboradorasComponent {
  empresas: EmpresaColaboradora[] = [
    {
      id: 1,
      nombre: 'Beatriz Flores Studio',
      colaboraciones: 15,
      categoria: 'Fotografía',
      foto: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400',
      visible: true
    },
    {
      id: 2,
      nombre: 'Armonía Musical',
      colaboraciones: 12,
      categoria: 'Música',
      foto: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
      visible: true
    },
    {
      id: 3,
      nombre: 'Sweet Moments Bakery',
      colaboraciones: 9,
      categoria: 'Pastelería',
      foto: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
      visible: true
    },
    {
      id: 4,
      nombre: 'Elegance Events',
      colaboraciones: 8,
      categoria: 'Wedding Planner',
      foto: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
      visible: true
    },
    {
      id: 5,
      nombre: 'Gourmet Catering Co.',
      colaboraciones: 6,
      categoria: 'Catering',
      foto: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400',
      visible: true
    },
    {
      id: 6,
      nombre: 'Jardín de Rosas Florería',
      colaboraciones: 5,
      categoria: 'Floristería',
      foto: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400',
      visible: true
    }
  ];

  nuevaEmpresa: EmpresaColaboradora = this.getEmpresaVacia();
  mostrarFormulario = false;
  empresaEditando: EmpresaColaboradora | null = null;
  busqueda = '';

  categorias = [
    'Música',
    'Fotografía',
    'Videografía',
    'Catering',
    'Wedding Planner',
    'Decoración',
    'Floristería',
    'Pastelería',
    'Recepción',
    'Animación',
    'Transporte',
    'Otro'
  ];

  getEmpresaVacia(): EmpresaColaboradora {
    return {
      id: 0,
      nombre: '',
      colaboraciones: 0,
      categoria: '',
      foto: '',
      visible: true
    };
  }

  abrirFormulario(): void {
    this.nuevaEmpresa = this.getEmpresaVacia();
    this.empresaEditando = null;
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.nuevaEmpresa = this.getEmpresaVacia();
    this.empresaEditando = null;
  }

  editarEmpresa(empresa: EmpresaColaboradora): void {
    this.empresaEditando = empresa;
    this.nuevaEmpresa = { ...empresa };
    this.mostrarFormulario = true;
  }

  guardarEmpresa(): void {
    if (!this.nuevaEmpresa.nombre || !this.nuevaEmpresa.categoria || !this.nuevaEmpresa.foto) {
      return;
    }

    if (this.empresaEditando) {
      // Editar empresa existente
      const index = this.empresas.findIndex(e => e.id === this.empresaEditando!.id);
      if (index !== -1) {
        this.empresas[index] = { ...this.nuevaEmpresa };
      }
    } else {
      // Crear nueva empresa
      const nuevoId = Math.max(0, ...this.empresas.map(e => e.id)) + 1;
      this.empresas.push({
        ...this.nuevaEmpresa,
        id: nuevoId
      });
    }

    this.cerrarFormulario();
  }

  eliminarEmpresa(empresa: EmpresaColaboradora): void {
    if (confirm(`¿Estás seguro de eliminar a "${empresa.nombre}"?`)) {
      this.empresas = this.empresas.filter(e => e.id !== empresa.id);
    }
  }

  toggleVisibilidad(empresa: EmpresaColaboradora): void {
    empresa.visible = !empresa.visible;
  }

  incrementarColaboraciones(empresa: EmpresaColaboradora): void {
    empresa.colaboraciones++;
  }

  decrementarColaboraciones(empresa: EmpresaColaboradora): void {
    if (empresa.colaboraciones > 0) {
      empresa.colaboraciones--;
    }
  }

  get empresasFiltradas(): EmpresaColaboradora[] {
    if (!this.busqueda) {
      return this.empresas;
    }
    
    const termino = this.busqueda.toLowerCase();
    return this.empresas.filter(e => 
      e.nombre.toLowerCase().includes(termino) ||
      e.categoria.toLowerCase().includes(termino)
    );
  }

  get totalEmpresas(): number {
    return this.empresas.length;
  }

  get empresasVisibles(): number {
    return this.empresas.filter(e => e.visible).length;
  }

  get totalColaboraciones(): number {
    return this.empresas.reduce((total, empresa) => total + empresa.colaboraciones, 0);
  }
}
