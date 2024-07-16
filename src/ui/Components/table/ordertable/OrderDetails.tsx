import React from 'react';
import OrderDetailsHeader from './OrderDetailsHeader';
import OrderDetailsTable from './OrderDetailsTable';

interface OrderDetailsProps {
  onClose: () => void;
}

export default function OrderDetails({ onClose }: OrderDetailsProps) {
  return (
    <div>
      <OrderDetailsHeader onClose={onClose} />
      <OrderDetailsTable />
    </div>
  );
}
