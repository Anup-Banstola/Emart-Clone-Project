import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ProductTableDataType {
  key: React.Key;
  order: IconDefinition;
  image: string;
  productName: string;
  category: string;
  offers: string;
  code: number;
  tags: string[];
  piece: number;
  bora: number;
  carton: number;
  kg: number;
}

export interface ProductTableProps {
  data: ProductTableDataType[];
}
