import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TitleMap = {
  [key: string]: string;
};

interface NavbarProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setIsExpanded }: NavbarProps) {
  const pathname = usePathname();

  const titleMap: TitleMap = {
    '/admin/orders': 'Orders',
    '/admin/products': 'Products',
    '/admin/categories': 'Categories',
    '/admin/offers': 'Offers',
    '/admin/stores': 'Stores',
    '/admin/store-users': 'Store Users',
    '/admin/users': 'Admin Users',
    '/admin/transaction-history': 'Transaction History',
    '/admin/settings': 'Settings',
  };

  const title = titleMap[pathname] || 'Default Title';

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="z-0 flex  h-14 items-center justify-between  border px-4  shadow-sm">
      <div className="flex h-12 cursor-pointer items-center justify-center">
        <FontAwesomeIcon
          icon={faBars}
          className="w-4 "
          onClick={toggleSidebar}
        />

        <span className=" my-8 ml-4 text-xl font-bold">{title}</span>
      </div>
      <div className="flex items-center">
        <p className="text-sm sm:hidden md:hidden">example@gmail.com</p>
        <Image
          src="/navIcon.png"
          alt="Gravatar"
          width={35}
          height={35}
          className="ml-4 rounded-full  p-[3px] ring-1 ring-gray-400 "
        />

        <Link href="/admin/notifications">
          <button
            type="button"
            className="mx-3 h-10 w-10 rounded-full object-cover transition-all hover:bg-slate-200"
            aria-label="Notification"
          >
            <FontAwesomeIcon icon={faBell} className="w-4  text-gray-500 " />
          </button>
        </Link>
      </div>
    </div>
  );
}
