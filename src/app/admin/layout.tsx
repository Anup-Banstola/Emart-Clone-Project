'use client';

import { useEffect, useState } from 'react';
import { DrawerProvider } from '@/context/DrawerContext';
import Footer from '@/ui/Atoms/Footer';
import Navbar from '../../ui/Components/Navbar';
import Sidebar from '../../ui/Components/Sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 480;
      setIsSmallScreen(isSmall);
      setIsExpanded(!isSmall);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          <div
            className={`relative flex h-auto w-full transition-all duration-200 sm:p-0 ${!isSmallScreen && isExpanded ? 'pl-[14rem]' : 'pl-[6rem]'}`}
          >
            <Sidebar
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              isSmallScreen={isSmallScreen}
            />
            <div className="flex min-h-screen w-full flex-col ">
              <Navbar setIsExpanded={setIsExpanded} />
              <main className="h-full">{children}</main>
              <Footer />
            </div>
          </div>
        </DrawerProvider>
      </body>
    </html>
  );
}
