import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS : Menu[] = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
 /* {
    state: 'apps',
    name: 'APPS',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'CALENDAR'},
      {state: 'messages', name: 'MESSAGES'},
      {state: 'social', name: 'SOCIAL'},
      {state: 'chat', name: 'CHAT'}
    ]
  },
  {
    state: 'features',
    name: 'FEATURES',
    type: 'sub',
    icon: 'library_books',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'colorpicker', name: 'COLOR PICKER'},
      {state: 'cropper', name: 'CROPPER'},
      {state: 'dragula', name: 'DRAGULA'},
      {state: 'sortable', name: 'SORTABLE'}
    ]
  },
  {
    state: 'material',
    name: 'MATERIAL',
    type: 'sub',
    icon: 'equalizer',
    badge: [
      {type: 'purple', value: '10'}
    ],
    children: [
      {state: 'button', name: 'BUTTON'},
      {state: 'cards', name: 'CARDS'},
      {state: 'select', name: 'SELECT'},
      {state: 'chips', name: 'CHIPS'},
      {state: 'input', name: 'INPUT'},
      {state: 'checkbox', name: 'CHECKBOX'},
      {state: 'radio', name: 'RADIO'},
      {state: 'toolbar', name: 'TOOLBAR'},
      {state: 'lists', name: 'LISTS'},
      {state: 'grid', name: 'GRID'},
      {state: 'progress', name: 'PROGRESS'},
      {state: 'tabs', name: 'TABS'},
      {state: 'switch', name: 'SWITCH'},
      {state: 'tooltip', name: 'TOOLTIP'},
      {state: 'menu', name: 'MENU'},
      {state: 'slider', name: 'SLIDER'},
      {state: 'snackbar', name: 'SNACKBAR'},
      {state: 'dialog', name: 'DIALOG'}
    ]
  },
  {
    state: 'icons',
    name: 'ICONS',
    type: 'sub',
    icon: 'center_focus_weak',
    children: [
      {state: 'font-awesome', name: 'FONT AWESOME'},
      {state: 'material-icons', name: 'MATERIAL ICONS'},
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'looks_3',
    children: [
      {state: 'editor', name: 'EDITOR'},
      {state: 'upload', name: 'UPLOAD'},
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'format_line_spacing',
    badge: [
      {type: 'blue-grey', value: '8'
      }
    ],
    children: [
      {state: 'fullscreen', name: 'FULLSCREEN'},
      {state: 'editing', name: 'EDITING'},
      {state: 'filter', name: 'FILTER'},
      {state: 'paging', name: 'PAGING'},
      {state: 'sorting', name: 'SORTING'},
      {state: 'pinning', name: 'PINNING'},
      {state: 'selection', name: 'SELECTION'},
    ]
  },*/
  {
    state: 'charts',
    name: 'CHARTS',
    type: 'sub',
    icon: 'show_chart',
    badge: [
      {type: 'blue-grey', value: '4'
      }
    ],
    children: [
      {state: 'bar-charts', name: 'BAR'},
      {state: 'pie-charts', name: 'PIE'},
      {state: 'line-charts', name: 'LINE'},
      {state: 'mixed-charts', name: 'MIXED'},
      {state: 'ng2-charts', name: 'NG2 CHARTS'},
    ]
  },
  {
    state: 'maps',
    name: 'MAPS',
    type: 'sub',
    icon: 'navigation',
    badge: [
      {type: 'green', value: 'new'
      }
    ],
    children: [
      {state: 'google', name: 'GOOGLE'},
      {state: 'leaflet', name: 'LEAFLET'}
    ]
  },
 /* {
    state: 'cards',
    name: 'CARDS',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'basic', name: 'BASIC'},
     
    ]
  },
    {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'about', name: 'ABOUT'},
      {state: 'contact', name: 'CONTACT'},
      {state: 'pricing', name: 'PRICING'},
      {state: 'blank', name: 'BLANK'},
    ]
  },
  {
    state: 'user-pages',
    name: 'USERS',
    type: 'sub',
    icon: 'person',
    children: [
      {state: 'userlist', name: 'USER LIST'},
      {state: 'userprofile', name: 'USER PROFILE'},
    ]
  },
  {
    state: 'gallery',
    name: 'GALLERY',
    type: 'sub',
    icon: 'person',
    children: [
      {state: 'gallery-v1', name: 'GALLERY SIMPLE'},
      {state: 'gallery-v2', name: 'GALLERY ADVANCED'},
      {state: 'gallery-v3', name: 'GALLERY 3RD PARTY'}
    ]
  },
  {
    state: 'ecommerce',
    name: 'ECOMMERCE',
    type: 'sub',
    icon: 'person',
    children: [
      {state: 'ecommerce-product', name: 'PRODUCT LISTING'},
      {state: 'ecommerce-product-detail', name: 'PRODUCT DETAIL'},
      {state: 'ecommerce-cart', name: 'CART'},
      {state: 'ecommerce-checkout', name: 'CHECKOUT'}
    ]
  },*/
  {
    state: 'authentication',
    name: 'AUTHENTICATION',
    type: 'sub',
    icon: 'security',
    children: [
      {state: 'login', name: 'LOGIN'},
      {state: 'register', name: 'REGISTER'},
      {state: 'forgot-password', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'}
    ]
  },
  /*{
    state: 'error',
    name: 'ERROR',
    type: 'sub',
    icon: 'error_outline',
    children: [
      {state: '404', name: '404'},
      {state: '503', name: '503'}
    ]
  }*/
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
