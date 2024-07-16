import React from 'react';
import data from '@/constants/orderPage/orderData';
import OrderTable from '@/ui/Components/table/ordertable/OrderTable';
import OrderHeader from '@/ui/Components/table/ordertable/OrderHeader';

function Orders() {
  return (
    <div className="relative h-full overflow-y-hidden p-4">
      <OrderHeader />
      <OrderTable data={data} />
    </div>
  );
}

export default Orders;
