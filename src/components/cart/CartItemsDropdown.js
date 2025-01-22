import React, { useEffect, useRef, useState } from "react";
import { handleClickOutside } from "../../services/outsideClickHandler";

const CartItemsDropdown = () => {
    const [isOpenCartItemDropdown, setOpenCartItemDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const { addEventListener, removeEventListener } = handleClickOutside(dropdownRef, () => setOpenCartItemDropdown(false));    
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
          onClick={()=>setOpenCartItemDropdown(!isOpenCartItemDropdown)}
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <div
          className={`${isOpenCartItemDropdown ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none`}
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

export default CartItemsDropdown;
