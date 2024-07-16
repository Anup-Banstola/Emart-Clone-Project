import StoresHeader from '@/ui/Components/table/stores/StoresHeader';
import StoresTable from '@/ui/Components/table/stores/StoresTable';
import React from 'react';
import data from '@/constants/storesPage/storesData';

function Stores() {
  return (
    <div className="p-4">
      <StoresHeader />
      <StoresTable data={data} />
    </div>
  );
}

export default Stores;
