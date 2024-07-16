export interface StoreUsersTableDataType {
  key: number;
  name: string;
  email: string;
  phone: number;
  companyName: string;
  pan: number;
  companyAddress: string;
  status: string;
}

export interface StoreUsersTableProps {
  data: StoreUsersTableDataType[];
}
