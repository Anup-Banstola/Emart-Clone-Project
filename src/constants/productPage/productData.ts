import { ProductTableDataType } from '@/types/ProductTable';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const data: ProductTableDataType[] = [
  {
    key: '1',
    order: faBars,
    image: '/nipuna-logo.png',
    productName: 'battery',
    category: 'bar',
    offers: 'offer 1',
    code: 102,
    tags: ['spr'],
    piece: 150,
    bora: 10,
    carton: 20,
    kg: 20,
  },
  {
    key: '2',
    order: faBars,
    image: '/nipuna_sewa_logo.png',
    productName: 'batt',
    category: 'bar',
    offers: 'offer 1',
    code: 102,
    tags: ['spr', 'coc'],
    piece: 150,
    bora: 10,
    carton: 20,
    kg: 20,
  },
];

export default data;
