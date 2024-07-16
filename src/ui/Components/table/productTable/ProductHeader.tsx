import RefreshButton from '@/ui/Atoms/RefreshButton';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Select } from 'antd';

function ProductHeader() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className=" flex gap-4 ">
          <Input placeholder="Search by Product Name" />
          <RefreshButton />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="mr-4 flex  items-center whitespace-nowrap rounded-md bg-blue-500 px-4 py-2 text-xs text-white shadow-lg duration-200 hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2  text-white" />
            Download Excel File
          </button>
          <button
            type="button"
            className="mr-4 flex items-center whitespace-nowrap rounded-md bg-blue-500 px-4 py-2 text-xs text-white shadow-lg duration-200 hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2  text-white" />
            Upload Excel File
          </button>
        </div>
      </div>
      <div className="mt-8">
        <div className="mb-4 flex items-center gap-4 ">
          <p className="text-sm ">Select Store:</p>
          <Select
            defaultValue="allStores"
            options={[{ value: 'allStores', label: 'All Stores' }]}
          />
        </div>
        <p className="text-xs text-gray-400">
          Recommended Product Image Size: 512x512 px
        </p>
      </div>
    </div>
  );
}

export default ProductHeader;
