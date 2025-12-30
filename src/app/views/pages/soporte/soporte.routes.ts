import { Routes } from '@angular/router';

export const SOPORTE_ROUTES: Routes = [
  {
    path: 'chat',
    loadComponent: () => import('./soporte-chat/soporte-chat.component').then(m => m.SoporteChatComponent)
  },
  {
    path: 'manual',
    loadComponent: () => import('./soporte-manual/soporte-manual.component').then(m => m.SoporteManualComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./soporte-contacto/soporte-contacto.component').then(m => m.SoporteContactoComponent)
  }
];
