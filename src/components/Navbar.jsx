import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import Logo from '../assets/SearchLogo.svg';
import Sun from '../assets/Sun Icon _ Font Awesome-37.svg';
import Moon from '../assets/Moon Icon _ Font Awesome-61.svg';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <img className="w-12 pt-1" src={Logo} alt="logo" />
        </Link>
        <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='p-2 py-1 hover:shadow-lg'>{darkTheme ? (<img className="w-6" src={Sun} alt="Go Light" />) : (<img className="w-6" src={Moon} alt="Go Dark" />)}</button>
      </div>
      <Search />
    </div>
  )
}
