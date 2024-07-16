import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

interface OrderDetailsHeaderProps {
  onClose: () => void;
}

export default function OrderDetailsHeader({
  onClose,
}: OrderDetailsHeaderProps) {
  return (
    <div className=" h-full w-full   transition-all duration-300 ease-in-out">
      <div className="mb-4 flex  items-center">
        <div className="flex flex-1 flex-col ">
          <p className="text-2xl font-semibold">Test Nipuna Stores</p>
          <div className="flex gap-4 sm:flex-col sm:gap-0 md:flex-col md:gap-0">
            <div className="text-xs text-gray-500">
              <span className="mr-1 text-sm text-black">Phone:</span>
              9585332238
            </div>
            <div className="text-xs text-gray-500">
              <span className="mr-1 text-sm text-black">PAN:</span>
              5332854
            </div>
            <div className=" text-xs text-gray-500">
              <span className="mr-1 text-sm text-black">Address:</span>
              Pokhara
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex  items-center justify-center rounded-md bg-gray-600 px-4 py-2 text-sm text-white"
          onClick={onClose}
        >
          {' '}
          <FontAwesomeIcon icon={faXmark} />
          <span className="ml-2">Close</span>
        </button>
      </div>
    </div>
  );
}
