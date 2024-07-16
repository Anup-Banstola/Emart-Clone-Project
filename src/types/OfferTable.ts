import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface OfferTableDataType {
  key: React.Key;
  order: IconDefinition;
  image: string;
  offerName: string;
}

export interface OfferTableProps {
  data: OfferTableDataType[];
}
