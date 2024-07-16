import data from '@/constants/categoryPage/categoryData';
import CategoryHeader from '@/ui/Components/table/category/CategoryHeader';
import CategoryTable from '@/ui/Components/table/category/CategoryTable';
import React from 'react';

function Categories() {
  return (
    <div className="p-4">
      <CategoryHeader />
      <CategoryTable data={data} />
    </div>
  );
}

export default Categories;
