import data from '@/constants/settingsPage/settingsData';
import SettingsHeader from '@/ui/Components/table/settings/SettingsHeader';
import SettingsTable from '@/ui/Components/table/settings/SettingsTable';
import React from 'react';

function Settings() {
  return (
    <div className="p-4">
      <SettingsHeader />
      <SettingsTable data={data} />
    </div>
  );
}

export default Settings;
