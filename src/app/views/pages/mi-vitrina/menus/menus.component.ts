import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

interface SeccionMenu {
  nombre: string;
  descripcion?: string;
  cantidadAElegir?: number;
  opciones: string[];
}

interface Menu {
  id: number;
  nombre: string;
  secciones: SeccionMenu[];
  activo: boolean;
}

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbAccordionModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {
  // Control de secciones colapsadas
  seccionesColapsadas: { [key: string]: boolean } = {};
  // Menús publicados
  menus: Menu[] = [
    {
      id: 1,
      nombre: 'Menú Premium',
      activo: true,
      secciones: [
        {
          nombre: 'Aperitivos',
          cantidadAElegir: 2,
          opciones: [
            'Pisco sour',
            'Maracuyá sour',
            'Algarrobina',
            'Piña colada'
          ]
        },
        {
          nombre: 'Bocaditos fríos',
          descripcion: 'Elegir 4 opciones entre fríos y calientes',
          opciones: [
            'Canapés de espárragos, jamón y queso',
            'Enrollados de salmón',
            'Causitas rellenas con pulpa de cangrejo',
            'Carpaccio de salmón'
          ]
        },
        {
          nombre: 'Bocaditos calientes',
          opciones: [
            'Brochetas de pollo con salsa de aguaymanto',
            'Langostinos al panko con salsa de maracuyá picante',
            'Tequeños rellenos con queso y salsa guacamole',
            'Vol au vent de alcachofa'
          ]
        },
        {
          nombre: 'Entrada',
          cantidadAElegir: 1,
          opciones: [
            'Alcachofas gratinadas rellena de tocino y champiñones',
            'Crepes rellenos de espinaca con pollo en salsa de pecanas',
            'Quiche loraine'
          ]
        },
        {
          nombre: 'Plato de fondo',
          cantidadAElegir: 1,
          descripcion: '* Nota: de elegir lomo tendrá costo adicional - consultar',
          opciones: [
            'Medallones de pollo con salsa de champiñones y nueces',
            'Lomo strogonoff',
            'Filete de corvina en salsa de bechamel al vino',
            'Lomo de cerdo en salsa de champagne'
          ]
        },
        {
          nombre: 'Acompañamiento',
          cantidadAElegir: 1,
          descripcion: 'Elegir un acompañamiento entre arroz o ensalada o guarnición',
          opciones: [
            'Arroz a la florentina y queso gruyere',
            'Ensalada caprese (tomate, mozzarella, albahaca vinagreta de albahaca)',
            'Ensalada cesar (mix de lechuga, crotones, tocino, queso parmesano y salsa césar)',
            'Verduras salteadas (zanahoria, vainita, brócoli)'
          ]
        },
        {
          nombre: 'Postre',
          cantidadAElegir: 1,
          opciones: [
            'Tiramisú',
            'Tres leches clásico',
            'Cheesecake (frutos de estación)'
          ]
        }
      ]
    }
  ];

  // Control de formulario
  mostrarFormulario: boolean = false;
  modoEdicion: boolean = false;
  menuEditando: Menu | null = null;

  // Nuevo menú
  nuevoMenu: Menu = this.crearMenuVacio();

  crearMenuVacio(): Menu {
    return {
      id: 0,
      nombre: '',
      activo: true,
      secciones: []
    };
  }

  // Métodos
  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.modoEdicion = false;
    this.nuevoMenu = this.crearMenuVacio();
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.menuEditando = null;
    this.nuevoMenu = this.crearMenuVacio();
  }

  editarMenu(menu: Menu): void {
    this.modoEdicion = true;
    this.mostrarFormulario = true;
    this.menuEditando = menu;
    this.nuevoMenu = JSON.parse(JSON.stringify(menu)); // Deep copy
  }

  guardarMenu(): void {
    if (!this.validarMenu()) {
      return;
    }

    if (this.modoEdicion && this.menuEditando) {
      // Actualizar menú existente
      const index = this.menus.findIndex(m => m.id === this.menuEditando!.id);
      if (index !== -1) {
        this.menus[index] = { ...this.nuevoMenu };
      }
      alert('✓ Menú actualizado correctamente');
    } else {
      // Crear nuevo menú
      this.nuevoMenu.id = Date.now();
      this.menus.push({ ...this.nuevoMenu });
      alert('✓ Menú creado correctamente');
    }

    this.cerrarFormulario();
  }

  validarMenu(): boolean {
    if (!this.nuevoMenu.nombre.trim()) {
      alert('⚠ Por favor ingresa un nombre para el menú');
      return false;
    }
    if (this.nuevoMenu.secciones.length === 0) {
      alert('⚠ Por favor agrega al menos una sección al menú');
      return false;
    }
    return true;
  }

  eliminarMenu(id: number): void {
    if (confirm('¿Estás seguro de eliminar este menú?')) {
      this.menus = this.menus.filter(m => m.id !== id);
      alert('✓ Menú eliminado');
    }
  }

  toggleEstado(menu: Menu): void {
    menu.activo = !menu.activo;
  }

  duplicarMenu(menu: Menu): void {
    const menuDuplicado = JSON.parse(JSON.stringify(menu));
    menuDuplicado.id = Date.now();
    menuDuplicado.nombre = `${menu.nombre} (Copia)`;
    this.menus.push(menuDuplicado);
    alert('✓ Menú duplicado correctamente');
  }

  // Agregar sección predefinida
  agregarSeccion(tipo: string): void {
    const seccionesBase: { [key: string]: SeccionMenu } = {
      'aperitivos': {
        nombre: 'Aperitivos',
        cantidadAElegir: 2,
        opciones: []
      },
      'bocaditos-frios': {
        nombre: 'Bocaditos fríos',
        descripcion: 'Elegir 4 opciones entre fríos y calientes',
        opciones: []
      },
      'bocaditos-calientes': {
        nombre: 'Bocaditos calientes',
        opciones: []
      },
      'entrada': {
        nombre: 'Entrada',
        cantidadAElegir: 1,
        opciones: []
      },
      'plato-fondo': {
        nombre: 'Plato de fondo',
        cantidadAElegir: 1,
        descripcion: '* Nota: de elegir lomo tendrá costo adicional - consultar',
        opciones: []
      },
      'acompañamiento': {
        nombre: 'Acompañamiento',
        cantidadAElegir: 1,
        descripcion: 'Elegir un acompañamiento entre arroz o ensalada o guarnición',
        opciones: []
      },
      'postre': {
        nombre: 'Postre',
        cantidadAElegir: 1,
        opciones: []
      }
    };

    if (seccionesBase[tipo]) {
      this.nuevoMenu.secciones.push({ ...seccionesBase[tipo] });
    }
  }

  eliminarSeccion(index: number): void {
    this.nuevoMenu.secciones.splice(index, 1);
  }

  agregarOpcion(seccionIndex: number, opcion: string): void {
    if (opcion.trim()) {
      this.nuevoMenu.secciones[seccionIndex].opciones.push(opcion.trim());
    }
  }

  eliminarOpcion(seccionIndex: number, opcionIndex: number): void {
    this.nuevoMenu.secciones[seccionIndex].opciones.splice(opcionIndex, 1);
  }

  get totalMenus(): number {
    return this.menus.length;
  }

  get menusActivos(): number {
    return this.menus.filter(m => m.activo).length;
  }
}
