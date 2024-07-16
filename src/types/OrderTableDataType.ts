export interface OrderTableDataType {
  key: React.Key;
  sn: number;
  storeName: string;
  contactNumber: number;
  contactPerson: string;
  address: string;
  pendingOrders: number;
  dispatchedOrders: number;
}

export interface OrderTableProps {
  data: OrderTableDataType[];
}
