import data from '@/constants/storeUsersPage/storeUsersData';
import StoreUsersHeader from '@/ui/Components/table/storeUsers/StoreUsersHeader';
import StoreUsersTable from '@/ui/Components/table/storeUsers/StoreUsersTable';
import React from 'react';

function StoreUsers() {
  return (
    <div className="p-4">
      <StoreUsersHeader />
      <StoreUsersTable data={data} />
    </div>
  );
}

export default StoreUsers;
