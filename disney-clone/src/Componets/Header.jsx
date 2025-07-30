import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv }
  ];

  return (
    <div className='flex items-center justify-between p-5 relative'>
      {/* Left: Logo & Menu */}
      <div className='flex gap-8 items-center'>
        <img src={logo} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8'>
          {menu.map((item, idx) => (
            <HeaderItem key={idx} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Menu */}
        <div className='flex md:hidden gap-5'>
          {menu.slice(0, 3).map((item, idx) => (
            <HeaderItem key={idx} name={''} Icon={item.icon} />
          ))}

          {/* Toggle Menu Button */}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle && (
              <div className='absolute left-0 mt-3 bg-[#121212] border border-gray-700 p-4 z-10'>
                {menu.slice(3).map((item, idx) => (
                  <HeaderItem key={idx} name={item.name} Icon={item.icon} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: Avatar */}
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="User Avatar"
        className='w-[40px] rounded-full'
      />
    </div>
  );
}

export default Header;
