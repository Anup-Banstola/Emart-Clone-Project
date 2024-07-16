'use client';

import {
  OrderTableDataType,
  OrderTableProps,
} from '@/types/OrderTableDataType';

import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { useState } from 'react';
import OrderDetails from './OrderDetails';

function OrderTable({ data }: OrderTableProps) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const onClose = () => {
    setDetailsVisible(false);
  };

  const showOrderDetails = () => {
    setDetailsVisible(true);
  };

  const columns: TableColumnsType<OrderTableDataType> = [
    {
      title: <span style={{ fontWeight: 'bold' }}>S.N.</span>,
      dataIndex: 'sn',
      key: 'sn',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Store Name</span>,
      dataIndex: 'storeName',
      key: 'storeName',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Contact Number</span>,
      dataIndex: 'contactNumber',
      key: 'contactNumber',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Contact Person</span>,
      dataIndex: 'contactPerson',
      key: 'contactPersonn',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Address</span>,
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Pending Orders</span>,
      dataIndex: 'pendingOrders',
      key: 'pendingOrders',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Dispatched Orders</span>,
      dataIndex: 'dispatchedOrders',
      key: 'dispatchedOrders',
      align: 'center',
    },
    {
      title: <span style={{ fontWeight: 'bold' }}>Detail</span>,
      dataIndex: 'detail',
      key: 'detail',
      align: 'center',
      render: () => (
        <Button type="primary" onClick={showOrderDetails}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="my-8 h-full overflow-hidden ">
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 100 }}
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 10,
        }}
      />
      <div
        className={`${detailsVisible ? 'visible' : 'hidden'} absolute bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-50 transition-all duration-200 ease-out`}
      />
      <div
        className={`${detailsVisible ? 'top-[0]' : 'top-[100%]'} absolute left-0 top-0 z-10 h-full w-full overflow-y-auto bg-white p-4 transition-all duration-300 ease-in-out`}
      >
        <OrderDetails onClose={onClose} />
      </div>
    </div>
  );
}
export default OrderTable;
