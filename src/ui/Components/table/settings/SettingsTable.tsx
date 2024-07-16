'use client';

import {
  SettingsTableDataType,
  SettingsTableProps,
} from '@/types/SettingsTable';
import { Button, Image, Table, TableColumnsType } from 'antd';

export default function SettingsTable({ data }: SettingsTableProps) {
  const columns: TableColumnsType<SettingsTableDataType> = [
    {
      title: 'S.N.',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: string) => (
        <div className="flex items-center justify-center">
          <Image src={text} alt="Banner Logo" width={50} height={50} />
        </div>
      ),
    },
    {
      title: 'Banner Name',
      key: 'bannerName',
      dataIndex: 'bannerName',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="default" danger>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
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
    </div>
  );
}
