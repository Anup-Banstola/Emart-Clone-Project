import React from 'react';
import ProductHeader from '@/ui/Components/table/productTable/ProductHeader';
import ProductTable from '@/ui/Components/table/productTable/ProductTable';
import data from '@/constants/productPage/productData';

function Products() {
  return (
    <div className="relative h-full p-4">
      <ProductHeader />
      <ProductTable data={data} />
    </div>
  );
}

export default Products;
