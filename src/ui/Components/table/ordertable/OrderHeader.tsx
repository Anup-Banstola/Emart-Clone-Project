'use client';

import React, { useState } from 'react';
import RefreshButton from '@/ui/Atoms/RefreshButton';
import { Input, Select } from 'antd';

export default function OrderHeader() {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <div>
        <Input
          placeholder="Search by Store Name"
          allowClear
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <Select
          defaultValue="all"
          style={{ width: 110 }}
          options={[
            { value: 'all', label: 'All' },
            { value: 'pending', label: 'Pending' },
            { vlaue: 'dispatched', label: 'Dispatched' },
          ]}
        />
      </div>
      <RefreshButton />
    </div>
  );
}
