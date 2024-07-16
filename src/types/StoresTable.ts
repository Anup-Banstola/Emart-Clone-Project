export interface StoresTableDataType {
  key: number;
  name: string;
  contactPerson: string;
  email: string;
  phoneNumber: number;
  address: string;
  panNumber: number;
  status: string;
}

export interface StoresTableProps {
  data: StoresTableDataType[];
}
