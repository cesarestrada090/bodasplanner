import { Routes } from '@angular/router';

export const SOLICITUDES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./solicitudes-resumen/solicitudes-resumen.component').then(m => m.SolicitudesResumenComponent)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('../solicitudes/solicitudes-configuracion/solicitudes-configuracion.component').then(m => m.SolicitudesConfiguracionComponent)
  },
  {
    path: 'plantillas',
    loadComponent: () => import('../solicitudes/solicitudes-plantillas/solicitudes-plantillas.component').then(m => m.SolicitudesPlantillasComponent)
  }
];
