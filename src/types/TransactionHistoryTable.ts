export interface CompanyDataType {
  key: number;
  companyName: string;
  address: string;
  email: string;
  pan: number;
  mobile: number;
  contactPerson: string;
  transactions: Transaction[];
}

export interface Transaction {
  key: number;
  clientPan: number;
  orderDate: string;
  status: string;
  total: number;
  transactionDetails: TransactionDetail[];
}

export interface TransactionDetail {
  key: number;
  image: string;
  itemName: string;
  price: number;
  qty: number;
  unitType: string;
}

export interface TransactionHistoryTableProps {
  data: CompanyDataType[];
}
