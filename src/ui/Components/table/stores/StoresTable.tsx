'use client';

import { DrawerContext } from '@/context/DrawerContext';
import { StoresTableDataType, StoresTableProps } from '@/types/StoresTable';

import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer, Input, Table, TableColumnsType } from 'antd';
import React, { useContext } from 'react';

export default function StoresTable({ data }: StoresTableProps) {
  const { drawerVisible, onClose, showDrawer } = useContext(DrawerContext);

  const columns: TableColumnsType<StoresTableDataType> = [
    {
      title: <span style={{ fontWeight: 700 }}>S.N.</span>,
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: <span style={{ fontWeight: 700 }}>Name</span>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: (
        <span className="text" style={{ fontWeight: 700 }}>
          Contact Person
        </span>
      ),
      dataIndex: 'contactPerson',
      key: 'contactPerson',
    },
    {
      title: (
        <span className="text" style={{ fontWeight: 700 }}>
          Email
        </span>
      ),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: (
        <span className="text" style={{ fontWeight: 700 }}>
          Phone Number
        </span>
      ),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: <span style={{ fontWeight: 700 }}>Address</span>,
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: (
        <span className="text" style={{ fontWeight: 700 }}>
          PAN Number
        </span>
      ),
      dataIndex: 'panNumber',
      key: 'panNumber',
    },
    {
      title: <span style={{ fontWeight: 700 }}>Status</span>,
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <p
          className={`${status === 'Active' ? 'text-green-700' : 'text-red-700'} whitespace-nowrap`}
        >
          {status}
        </p>
      ),
    },
    {
      title: <span style={{ fontWeight: 700 }}>Action</span>,

      key: 'action',
      render: (record: StoresTableDataType) => (
        <button
          type="button"
          className="whitespace-nowrap rounded bg-gray-500 px-4 py-2 text-sm text-white hover:bg-orange-700"
        >
          {record.status === 'active' ? 'De-Activate' : 'Activate'}
        </button>
      ),
    },
    {
      title: <span style={{ fontWeight: 700 }}>Edit</span>,

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
    <div className="my-8 overflow-auto">
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
            <span>Edit Store Details</span>
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
            <p>Contact Person*</p>
            <Input />
          </div>
          <div>
            <p>Mobile Number*</p>
            <Input />
          </div>
          <div>
            <p>Address*</p>
            <Input />
          </div>
          <Button type="primary" className="mt-4">
            Save
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
