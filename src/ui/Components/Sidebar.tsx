'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  sidebarLinks,
  sideDocs,
} from '@/constants/sidebarMenu/sidebarMenuItems';

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isSmallScreen: boolean;
}

function Sidebar({ isExpanded, setIsExpanded, isSmallScreen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={`${isExpanded ? 'w-[14rem]' : 'w-[6rem]'} fixed bottom-0 left-0 top-0 z-20 flex h-full transition-all duration-300 ${isSmallScreen && !isExpanded ? 'hidden' : 'block'}`}
    >
      <div className="z-30 flex h-full w-full flex-col bg-[#27374D] py-4">
        <div className="relative flex h-20 items-center justify-between px-4">
          <Image
            src="/nipuna_sewa_logo.png"
            alt="NPS Logo"
            className="mx-auto rounded-md "
            width={isExpanded ? 55 : 30}
            height={isExpanded ? 55 : 30}
          />
          {isSmallScreen && isExpanded && (
            <button
              type="button"
              className="absolute right-0  h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#3C4D6F] text-white  "
              onClick={() => setIsExpanded(false)}
            >
              {' '}
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="w-4 text-white"
              />
            </button>
          )}
        </div>
        <div className=" scroll-container overflow-y-auto overflow-x-hidden px-6">
          {sidebarLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`mb-1 flex items-center ${!isExpanded ? 'justify-center' : ''} rounded-md p-2 text-white hover:bg-[#3C4D6F]  ${pathname === link.path ? 'bg-[#3C4D6F]' : ''}`}
            >
              <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
              <span
                className={`${isExpanded ? 'ml-3' : 'hidden'}   text-sm transition-all duration-300 ease-in-out md:text-xs`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className="my-4 w-full border border-slate-600" />
          {sideDocs.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`mb-1 flex items-center rounded-md p-2 text-white ${!isExpanded ? 'justify-center' : ''} hover:bg-[#3C4D6F] ${pathname === link.path ? 'bg-[#3C4D6F]' : ''}`}
            >
              <FontAwesomeIcon icon={link.icon} className=" w-4 " />
              <span
                className={`${isExpanded ? 'ml-3' : 'hidden'}  text-sm transition-all duration-300 ease-in-out md:text-xs`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="mx-6 mb-4 mt-auto flex items-center  rounded-md bg-[#3C4D6F] px-4 py-2 text-white "
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} className=" w-4" />
          <span className={`${isExpanded ? 'ml-3' : 'hidden'}  text-sm`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
