import RefreshButton from '@/ui/Atoms/RefreshButton';
import { Input } from 'antd';
import React from 'react';

export default function StoreUsersHeader() {
  return (
    <div className="flex w-full items-center gap-4">
      <div>
        <Input placeholder="Search by Store Name" />
      </div>
      <RefreshButton />
    </div>
  );
}
