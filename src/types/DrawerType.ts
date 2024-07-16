export type DrawerContextType = {
  drawerVisible: boolean;
  setDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  showDrawer: () => void;
};
