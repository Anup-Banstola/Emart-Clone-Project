import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { SidebarItemType } from '@/types/SidebarItem';

import {
  faCartShopping,
  faTags,
  faGift,
  faStore,
  faUsers,
  faFile,
  faCog,
  faBook,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

export const sidebarLinks: SidebarItemType[] = [
  {
    name: 'Orders',
    icon: faCartShopping,
    path: '/admin/orders',
  },
  {
    name: 'Products',
    icon: faProductHunt,
    path: '/admin/products',
  },
  {
    name: 'Categories',
    icon: faTags,
    path: '/admin/categories',
  },
  {
    name: 'Offers',
    icon: faGift,
    path: '/admin/offers',
  },
  {
    name: 'Stores',
    icon: faStore,
    path: '/admin/stores',
  },
  {
    name: 'Store Users',
    icon: faUsers,
    path: '/admin/store-users',
  },
  {
    name: 'Admin Users',
    icon: faUsers,
    path: '/admin/users',
  },
  {
    name: 'Transaction History',
    icon: faFile,
    path: '/admin/transaction-history',
  },
  {
    name: 'Settings',
    icon: faCog,
    path: '/admin/settings',
  },
];

export const sideDocs: SidebarItemType[] = [
  {
    name: 'Admin Docs',
    icon: faBook,
    path: 'https://nipuna.gitbook.io/e-mart-user-manual/',
  },
  {
    name: 'Mobile App Docs',
    icon: faBook,
    path: 'https://nipuna.gitbook.io/e-mart-user-manual-mobile/',
  },
  {
    name: 'Download App',
    icon: faDownload,
    path: '/apps',
  },
];
