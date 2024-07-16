import data from '@/constants/offerPage/offerData';
import OfferHeader from '@/ui/Components/table/offers/OffersHeader';
import OfferTable from '@/ui/Components/table/offers/OffersTable';
import React from 'react';

function Categories() {
  return (
    <div className="p-4">
      <OfferHeader />
      <OfferTable data={data} />
    </div>
  );
}

export default Categories;
