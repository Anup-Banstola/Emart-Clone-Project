'use client';

import { ProductTableDataType, ProductTableProps } from '@/types/ProductTable';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import EntityImage from '../../EntityImage';

const columns: TableColumnsType<ProductTableDataType> = [
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
      <EntityImage src={text} alt="Company Logo" width={50} height={50} />
    ),
    align: 'center',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Product Name
      </span>
    ),
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Category
      </span>
    ),
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Offers
      </span>
    ),
    dataIndex: 'offers',
    key: 'offers',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Code
      </span>
    ),
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Tags
      </span>
    ),
    dataIndex: 'tags',
    key: 'tags',

    render: (tags: string[]) => tags.join(', '),
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Piece
      </span>
    ),
    dataIndex: 'piece',
    key: 'piece',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Bora
      </span>
    ),
    dataIndex: 'bora',
    key: 'bora',
  },
  {
    title: (
      <span className="text" style={{ fontWeight: 700 }}>
        Carton
      </span>
    ),
    dataIndex: 'carton',
    key: 'carton',
  },
  {
    title: (
      <span className="" style={{ fontWeight: 700 }}>
        Kg
      </span>
    ),
    dataIndex: 'kg',
    key: 'kg',
  },
];

function ProductTable({ data }: ProductTableProps) {
  return (
    <div className=" my-8 overflow-x-auto">
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
    </div>
  );
}
export default ProductTable;
