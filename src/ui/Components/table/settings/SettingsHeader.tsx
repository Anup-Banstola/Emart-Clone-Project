'use client';

import { DrawerContext } from '@/context/DrawerContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer, Input, Switch } from 'antd';
import { useContext } from 'react';

export default function SettingsHeader() {
  const { drawerVisible, onClose, showDrawer } = useContext(DrawerContext);

  return (
    <div className="p-4">
      <div className="flex items-center gap-4  ">
        <p className="py-4  font-bold">Maintenance Mode</p>
        <Switch />
      </div>
      <div className="flex flex-col">
        <p className="py-4  font-bold">Change Brand Logo</p>
        <div>
          <Button type="primary">Change Brand Logo</Button>
        </div>

        <p className="mt-2 text-xs text-gray-500">
          Recommended Size: 512x512 px
        </p>
      </div>
      <div>
        <p className="py-4  font-bold">Banner</p>
        <div>
          <Button type="primary" onClick={showDrawer}>
            Add new Banner
          </Button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Recommended Banner Image Size: 1280x720 px
        </p>
      </div>
      <Drawer
        title={
          <div className="flex w-full justify-between">
            <span>Add New Banner</span>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
        }
        open={drawerVisible}
        closable={false}
        placement="right"
      >
        <div>
          <p className="my-2 text-lg font-medium">Banner Name*</p>
          <Input />
        </div>
        <Button type="primary" className="mt-6 w-full">
          <span className="font-bold">ADD BANNER</span>
        </Button>
      </Drawer>
    </div>
  );
}
