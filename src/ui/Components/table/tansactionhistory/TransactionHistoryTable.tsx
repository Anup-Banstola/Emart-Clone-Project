'use client';

import {
  CompanyDataType,
  Transaction,
  TransactionDetail,
  TransactionHistoryTableProps,
} from '@/types/TransactionHistoryTable';
import { Image, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

export default function TransactionHistoryTable({
  data,
}: TransactionHistoryTableProps) {
  const expandedTransactionRender = (transaction: Transaction) => {
    const transactionDetailColumns: ColumnsType<TransactionDetail> = [
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (text: string) => (
          <Image src={text} alt="item" style={{ width: 50 }} />
        ),
      },
      { title: 'Item Name', dataIndex: 'itemName', key: 'itemName' },
      { title: 'Price', dataIndex: 'price', key: 'price' },
      { title: 'Quantity', dataIndex: 'qty', key: 'qty' },
      { title: 'Unit Type', dataIndex: 'unitType', key: 'unitType' },
    ];
    return (
      <Table
        columns={transactionDetailColumns}
        dataSource={transaction.transactionDetails}
        pagination={false}
        className="my-8 mr-4"
      />
    );
  };

  const expandedRowRender = (record: CompanyDataType) => {
    const transactionColumns: ColumnsType<Transaction> = [
      {
        title: 'Client PAN No.',
        dataIndex: 'clientPan',
        key: 'clientPan',
      },
      {
        title: 'Order Date',
        dataIndex: 'orderDate',
        key: 'orderDate',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      },
    ];
    return (
      <Table
        columns={transactionColumns}
        dataSource={record.transactions}
        pagination={false}
        expandable={{
          expandedRowRender: expandedTransactionRender,
          rowExpandable: (records) => records.transactionDetails.length > 0,
        }}
        className=" my-8 mr-4"
      />
    );
  };

  const columns: ColumnsType<CompanyDataType> = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'PAN No.',
      dataIndex: 'pan',
      key: 'pan',
    },
    {
      title: 'Mnobile No.',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Contact Person',
      dataIndex: 'contactPerson',
      key: 'contactPerson',
    },
  ];

  return (
    <div className="my-8">
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) => record.transactions.length > 0,
        }}
        dataSource={data}
        scroll={{ x: 100 }}
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 10,
        }}
        className=" my-8 mr-4"
      />
    </div>
  );
}
