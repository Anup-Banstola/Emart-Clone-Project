export interface AdminUsersTableDataType {
  key: number;
  name: string;
  email: string;
  mobile: number;
  role: string;
  status: string;
}

export interface AdminUsersTableProps {
  data: AdminUsersTableDataType[];
}
