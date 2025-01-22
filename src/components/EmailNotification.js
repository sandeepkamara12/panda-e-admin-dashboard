import React, { useEffect, useRef, useState } from "react";
import { handleClickOutside } from "../services/outsideClickHandler";

const EmailNotification = () => {
  const [isOpenEmailDropdown, setOpenEmailDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const { addEventListener, removeEventListener } = handleClickOutside(dropdownRef, () => setOpenEmailDropdown(false));    
        addEventListener();    
        return () => {
          removeEventListener();
        };
      }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex text-sm"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={()=>setOpenEmailDropdown(!isOpenEmailDropdown)}
      >
        <svg
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </button>
      <div
        className={`${isOpenEmailDropdown ? '' : 'hidden'}  absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex="-1"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-1"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-2"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default EmailNotification;
