'use client';

import { Button } from 'antd';
import React from 'react';

export default function DownloadApp() {
  const handleAndroidButtonClick = () => {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.nipuna.emart';
  };

  const handleIOSButtonClick = () => {
    window.location.href =
      'https://apps.apple.com/us/app/min-bahadur-sherchan-stores/id6467188242';
  };

  return (
    <div className="my-auto flex h-screen w-full flex-col items-center justify-center text-center">
      <div>
        <p className="mb-1 text-2xl font-medium">Download App</p>
        <p className="text-sm text-gray-600 ">
          Please, download APK for Android and IPA for IOS
        </p>
      </div>
      <div className="mt-6 flex gap-4">
        <Button
          type="primary"
          className="text-xl"
          style={{ fontSize: '13px' }}
          onClick={handleAndroidButtonClick}
        >
          Android Play Store
        </Button>
        <Button
          type="primary"
          style={{ fontSize: '13px' }}
          onClick={handleIOSButtonClick}
        >
          Apple App Store
        </Button>
      </div>
    </div>
  );
}
