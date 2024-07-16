'use client';

import { DrawerContext } from '@/context/DrawerContext';
import {
  AdminUsersTableDataType,
  AdminUsersTableProps,
} from '@/types/AdminUsersTable';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer, Input, Select, Table, TableColumnsType } from 'antd';
import React, { useContext } from 'react';

export default function AdminUsersTable({ data }: AdminUsersTableProps) {
  const { drawerVisible, onClose, showDrawer } = useContext(DrawerContext);

  const columns: TableColumnsType<AdminUsersTableDataType> = [
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
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
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
      render: (record: AdminUsersTableDataType) => (
        <button
          type="button"
          className="whitespace-nowrap rounded bg-gray-500 px-4 py-2 text-sm text-white hover:bg-orange-700"
        >
          {record.status === 'Active' ? 'De-Activate' : 'Activate'}
        </button>
      ),
    },
    {
      title: 'Edit',
      key: 'edit',
      render: () => (
        <FontAwesomeIcon
          icon={faPencil}
          className="cursor-pointer"
          onClick={showDrawer}
        />
      ),
    },
  ];

  return (
    <div className="my-8">
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 100 }}
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 10,
        }}
      />
      <Drawer
        title={
          <div className="flex w-full items-center justify-between font-bold">
            <span>Update User</span>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
        }
        closable={false}
        placement="right"
        open={drawerVisible}
      >
        <div className="flex flex-col gap-3 text-gray-400">
          <div>
            <p>Name*</p>
            <Input />
          </div>

          <div>
            <p>Mobile Number*</p>
            <Input />
          </div>

          <div>
            <p>Role*</p>
            <Select className="w-full" />
          </div>
          <Button type="primary" className="mt-4">
            Update
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
