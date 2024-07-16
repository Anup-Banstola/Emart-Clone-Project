import { DrawerContextType } from '@/types/DrawerType';
import { createContext, ReactElement, useMemo, useState } from 'react';

const initState: DrawerContextType = {
  drawerVisible: false,
  setDrawerVisible: () => {},
  onClose: () => {},
  showDrawer: () => {},
};

export const DrawerContext = createContext<DrawerContextType>(initState);

export function DrawerProvider({ children }: { children: ReactElement }) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onClose = () => {
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const contextValue = useMemo(
    () => ({ drawerVisible, setDrawerVisible, onClose, showDrawer }),
    [drawerVisible],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
}
