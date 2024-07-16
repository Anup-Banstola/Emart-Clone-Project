'use client';

import React from 'react';
import { Table, type TableColumnsType } from 'antd';
import {
  CategoryTableDataType,
  CategoryTableProps,
} from '@/types/CategoryTable';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntityImage from '../../EntityImage';

const columns: TableColumnsType<CategoryTableDataType> = [
  {
    title: <span style={{ fontWeight: 700 }}>Order</span>,
    dataIndex: 'order',
    key: 'order',
    render: (icon: IconDefinition) => (
      <FontAwesomeIcon icon={icon} width={24} />
    ),
    align: 'center',
  },
  {
    title: <span style={{ fontWeight: 700 }}>Image</span>,
    dataIndex: 'image',
    key: 'image',
    render: (text: string) => (
      <div className="flex items-center justify-center">
        <EntityImage src={text} alt="Company Logo" width={50} height={50} />
      </div>
    ),
    align: 'center',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Category Name
      </span>
    ),
    dataIndex: 'categoryName',
    key: 'categoryName',
  },
];

export default function CategoryTable({ data }: CategoryTableProps) {
  return (
    <div className="my-8">
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </div>
  );
}
