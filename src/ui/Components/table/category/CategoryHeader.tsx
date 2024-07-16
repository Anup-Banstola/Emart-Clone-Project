import RefreshButton from '@/ui/Atoms/RefreshButton';
import { Input, Select } from 'antd';
import React from 'react';

export default function CategoryHeader() {
  return (
    <div className="w-full">
      <div className="mr-auto flex flex-wrap items-baseline gap-4">
        <div>
          <Input placeholder="Search by Category" />
        </div>
        <RefreshButton />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <p className="block text-sm font-medium  md:hidden">Select Store:</p>
        <Select
          defaultValue="allStores"
          options={[{ value: 'allStores', label: 'All Stores' }]}
          style={{ width: 150 }}
        />
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Recommended Product Image Size: 512x512 px
      </p>
    </div>
  );
}
