'use client';

import { createContext, ReactElement, useMemo, useState } from 'react';
import { SidebarCollapseType } from '@/types/SidebarType';

const initState: SidebarCollapseType = {
  isExpanded: false,
  setIsExpanded: () => {},
};

export const SidebarContext = createContext<SidebarCollapseType>(initState);

export function SidebarProvider({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const [isExpanded, setIsExpanded] = useState(true);
  const contextValue = useMemo(
    () => ({ isExpanded, setIsExpanded }),
    [isExpanded],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}
