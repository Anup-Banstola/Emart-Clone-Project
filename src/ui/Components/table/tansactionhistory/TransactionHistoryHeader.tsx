import RefreshButton from '@/ui/Atoms/RefreshButton';
import { Input } from 'antd';

export default function TransactionHistoryHeader() {
  return (
    <div className="flex w-full items-center gap-4">
      <div>
        <Input placeholder="Search by Company" />
      </div>
      <RefreshButton />
    </div>
  );
}
