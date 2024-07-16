'use client';

import { DrawerContext } from '@/context/DrawerContext';
import RefreshButton from '@/ui/Atoms/RefreshButton';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer, Input, Select } from 'antd';
import React, { useContext } from 'react';

export default function AdminUsersHeader() {
  const { drawerVisible, onClose, showDrawer } = useContext(DrawerContext);

  return (
    <div className=" flex items-center justify-between">
      <div className="flex w-full items-center gap-4">
        <div>
          <Input placeholder="Search by Name" />
        </div>
        <RefreshButton />
      </div>
      <div>
        <button
          type="button"
          className="flex items-center  whitespace-nowrap rounded-md bg-blue-500  px-6 py-2 text-sm text-white shadow hover:bg-blue-600"
          onClick={showDrawer}
        >
          <FontAwesomeIcon icon={faPlus} className="text-white" />
          <p className="ml-2">Add User</p>
        </button>
      </div>
      <Drawer
        title={
          <div className="flex w-full items-center justify-between font-bold">
            <span>Add new User</span>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
        }
        closable={false}
        placement="right"
        open={drawerVisible}
      >
        <div className="flex flex-col gap-3 text-gray-400">
          <div>
            <p>Name*</p>
            <Input />
          </div>
          <div>
            <p>Email*</p>
            <Input />
          </div>
          <div>
            <p>Mobile Number*</p>
            <Input />
          </div>
          <div>
            <p>Password*</p>
            <Input />
          </div>
          <div>
            <p>Confirm Password*</p>
            <Input.Password />
          </div>
          <div>
            <p>Role*</p>
            <Select className="w-full" />
          </div>
          <Button type="primary" className="mt-4">
            Save
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
