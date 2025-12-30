import { Routes } from '@angular/router';

export const MI_VITRINA_ROUTES: Routes = [
  {
    path: 'datos-empresa',
    loadComponent: () => import('./datos-empresa/datos-empresa.component').then(m => m.DatosEmpresaComponent)
  },
  {
    path: 'localizacion',
    loadComponent: () => import('./localizacion/localizacion.component').then(m => m.LocalizacionComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./preguntas-frecuentes/preguntas-frecuentes.component').then(m => m.PreguntasFrecuentesComponent)
  },
  {
    path: 'promociones',
    loadComponent: () => import('./promociones/promociones.component').then(m => m.PromocionesComponent)
  },
  {
    path: 'fotos-videos',
    loadComponent: () => import('./fotos-videos/fotos-videos.component').then(m => m.FotosVideosComponent)
  },
  {
    path: 'reportajes',
    loadComponent: () => import('./reportajes/reportajes.component').then(m => m.ReportajesComponent)
  },
  {
    path: 'menus',
    loadComponent: () => import('./menus/menus.component').then(m => m.MenusComponent)
  },
  {
    path: 'disponibilidad',
    loadComponent: () => import('./disponibilidad/disponibilidad.component').then(m => m.DisponibilidadComponent)
  },
  {
    path: 'eventos',
    loadComponent: () => import('./eventos/eventos.component').then(m => m.EventosComponent)
  },
  {
    path: 'empresas-colaboradoras',
    loadComponent: () => import('./empresas-colaboradoras/empresas-colaboradoras.component').then(m => m.EmpresasColaboradorasComponent)
  },
  {
    path: 'equipo',
    loadComponent: () => import('./equipo/equipo.component').then(m => m.EquipoComponent)
  },
  {
    path: 'redes-sociales',
    loadComponent: () => import('./redes-sociales/redes-sociales.component').then(m => m.RedesSocialesComponent)
  },
  {
    path: 'sello-colaborador',
    loadComponent: () => import('./sello-colaborador/sello-colaborador.component').then(m => m.SelloColaboradorComponent)
  }
];
