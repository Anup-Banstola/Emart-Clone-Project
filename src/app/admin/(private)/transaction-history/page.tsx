import TransactionHistoryTable from '@/ui/Components/table/tansactionhistory/TransactionHistoryTable';
import TransactionHistoryHeader from '@/ui/Components/table/tansactionhistory/TransactionHistoryHeader';
import React from 'react';
import companies from '@/constants/transactionHistoryPage/transactionHistoryData';

function Transaction() {
  return (
    <div className="p-4 ">
      <TransactionHistoryHeader />
      <TransactionHistoryTable data={companies} />
    </div>
  );
}

export default Transaction;
