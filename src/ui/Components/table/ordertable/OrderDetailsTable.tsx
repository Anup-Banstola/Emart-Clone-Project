import { OrderDetailsType } from '@/types/OrderDetails';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Table, TableColumnsType } from 'antd';
import React, { useState } from 'react';

const initialData = [
  {
    key: '1',
    date: 'May 27, 2024 1:03 PM',
    items: [
      {
        key: '1-1',
        item: 'sprite',
        qty: 7,
        rateWithVat: 150,
        totalWithVat: 1674,
        dispatched: false,
      },
    ],
  },
  {
    key: '2',
    date: 'May 29, 2024 11:03 PM',
    items: [
      {
        key: '2-1',
        item: 'frooti',
        qty: 7,
        rateWithVat: 150,
        totalWithVat: 1674,
        dispatched: false,
      },
      {
        key: '2-2',
        item: 'biscuit',
        qty: 7,
        rateWithVat: 150,
        totalWithVat: 1674,
        dispatched: false,
      },
    ],
  },
];

export default function OrderDetailsTable() {
  const [data, setData] = useState(initialData);

  const handleDispatch = (dateKey: string, itemKey: string) => {
    setData((prevData) =>
      prevData.map((order) => {
        if (order.key === dateKey) {
          return {
            ...order,
            items: order.items.map((item) =>
              item.key === itemKey ? { ...item, dispatched: true } : item,
            ),
          };
        }
        return order;
      }),
    );
  };

  const handlePaid = (dateKey: string, itemKey: string) => {
    setData((prevData) =>
      prevData
        .map((order) => {
          if (order.key === dateKey) {
            return {
              ...order,
              items: order.items.filter((item) => item.key !== itemKey),
            };
          }
          return order;
        })
        .filter((order) => order.items.length > 0),
    );
  };

  const columns: TableColumnsType<OrderDetailsType> = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Rate (with VAT)',
      dataIndex: 'rateWithVat',
      key: 'rateWithVat',
    },
    {
      title: 'Total (with VAT)',
      dataIndex: 'totalWithVat',
      key: 'totalWithVat',
    },
  ];

  function renderOrders() {
    return data.map((order) => (
      <div key={order.key}>
        <div className="flex items-center justify-between border-b border-gray-200 py-2">
          <span>{order.date}</span>
          {!order.items[0].dispatched ? (
            <button
              type="button"
              className="rounded-md bg-indigo-500 px-4 py-2 text-sm text-white"
              onClick={() => handleDispatch(order.key, order.date)}
            >
              <FontAwesomeIcon icon={faTruck} className="mr-2" />
              Mark as Dispatched
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-md bg-green-600 px-4 py-2 text-xs text-white "
                onClick={() => handlePaid('1', '1-1')}
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mr-1 bg-green-600"
                />
                Mark as Paid
              </button>
              <Button type="primary" className="h-full">
                Print
              </Button>
            </div>
          )}
        </div>
        <Table
          columns={columns}
          dataSource={order.items.map((item) => ({
            ...item,
            dateKey: order.key,
          }))}
          pagination={false}
          rowKey="key"
        />
      </div>
    ));
  }

  return <div>{renderOrders()}</div>;
}
