'use client';

import {
  StoreUsersTableDataType,
  StoreUsersTableProps,
} from '@/types/StoreUsersTable';
import { Button, Table, TableColumnsType } from 'antd';
import React from 'react';

export default function StoreUsersTable({ data }: StoreUsersTableProps) {
  const columns: TableColumnsType<StoreUsersTableDataType> = [
    {
      title: 'S.N.',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'PAN',
      dataIndex: 'pan',
      key: 'pan',
    },
    {
      title: 'Company Address',
      dataIndex: 'companyAddress',
      key: 'companyAddress',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'key',
      render: (status: string) => (
        <p
          className={`${status === 'Active' ? 'text-green-700' : 'text-red-700'} whitespace-nowrap`}
        >
          {status}
        </p>
      ),
    },
    {
      title: 'Reset Password',
      key: 'key',
      render: () => <Button type="default">Send Reset Link</Button>,
    },
    {
      title: 'Action',
      key: 'key',
      render: (record: StoreUsersTableDataType) => (
        <button
          type="button"
          className="whitespace-nowrap rounded bg-gray-500 px-4 py-2 text-sm text-white hover:bg-orange-700"
        >
          {record.status === 'Active' ? 'De-Activate' : 'Activate'}
        </button>
      ),
    },
  ];

  return (
    <div className="my-8">
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 1000 }}
        bordered
        size="middle"
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 10,
        }}
      />
    </div>
  );
}
