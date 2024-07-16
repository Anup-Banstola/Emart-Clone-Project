export interface SettingsTableDataType {
  key: number;
  image: string;
  bannerName: string;
}

export interface SettingsTableProps {
  data: SettingsTableDataType[];
}
