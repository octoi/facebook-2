import React from 'react';
import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          alt='Facebook'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            type="text"
            placeholder='Search Facebook'
            className='hidden md:inline-flex bg-transparent flex ml-2 outline-none placeholder-gray-500'
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className='flex space-x-6 md:space-x-2 '>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* <Image  /> */}
        <p className='font-semibold whitespace-nowrap pr-3'>Rick Astley</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}
