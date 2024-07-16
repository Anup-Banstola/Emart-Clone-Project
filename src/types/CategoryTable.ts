import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface CategoryTableDataType {
  key: React.Key;
  order: IconDefinition;
  image: string;
  categoryName: string;
}

export interface CategoryTableProps {
  data: CategoryTableDataType[];
}
