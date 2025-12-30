import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Menú Principal',
    isTitle: true
  },
  {
    label: 'Inicio',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Mi Vitrina',
    icon: 'briefcase',
    subItems: [
      {
        label: 'Datos empresa',
        link: '/mi-vitrina/datos-empresa',
      },
      {
        label: 'Localización y mapa',
        link: '/mi-vitrina/localizacion',
      },
      {
        label: 'Preguntas Frecuentes',
        link: '/mi-vitrina/faq',
      },
      {
        label: 'Promociones',
        link: '/mi-vitrina/promociones',
      },
      {
        label: 'Fotos y Videos',
        link: '/mi-vitrina/fotos-videos',
      },
      {
        label: 'Reportajes',
        link: '/mi-vitrina/reportajes',
      },
      {
        label: 'Menús para recepciones',
        link: '/mi-vitrina/menus',
      },
      {
        label: 'Disponibilidad',
        link: '/mi-vitrina/disponibilidad',
      },
      {
        label: 'Eventos',
        link: '/mi-vitrina/eventos',
      },
      {
        label: 'Empresas colaboradoras',
        link: '/mi-vitrina/empresas-colaboradoras',
      },
      {
        label: 'Equipo',
        link: '/mi-vitrina/equipo',
      },
      {
        label: 'Redes sociales',
        link: '/mi-vitrina/redes-sociales',
      },
      {
        label: 'Sello colaborador',
        link: '/mi-vitrina/sello-colaborador',
      },
    ]
  },
  {
    label: 'Mis Solicitudes',
    icon: 'inbox',
    subItems: [
      {
        label: 'Resumen',
        link: '/solicitudes',
      },
      {
        label: 'Configuración',
        link: '/solicitudes/configuracion',
      },
      {
        label: 'Plantillas de respuesta',
        link: '/solicitudes/plantillas',
      },
    ]
  },
  {
    label: 'Opiniones',
    icon: 'star',
    link: '/opiniones',
  },
  {
    label: 'Facturación',
    icon: 'credit-card',
    link: '/facturacion',
  },
  {
    label: 'Notificaciones',
    icon: 'bell',
    link: '/notificaciones',
  },
  {
    label: 'Soporte',
    isTitle: true
  },
  {
    label: 'Chat con IA',
    icon: 'message-circle',
    link: '/soporte/chat',
  },
  {
    label: 'Manual de usuario',
    icon: 'book-open',
    link: '/soporte/manual',
  },
  {
    label: 'Formulario de contacto',
    icon: 'mail',
    link: '/soporte/contacto',
  }
];
