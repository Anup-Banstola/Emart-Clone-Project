import data from '@/constants/adminUsersPage/adminUsersData';
import AdminUsersHeader from '@/ui/Components/table/adminUsers/AdminUsersHeader';
import AdminUsersTable from '@/ui/Components/table/adminUsers/AdminUsersTable';

function Users() {
  return (
    <div className="p-4">
      <AdminUsersHeader />
      <AdminUsersTable data={data} />
    </div>
  );
}

export default Users;
