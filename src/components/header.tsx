import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import yumyum from "../assests/yumyum.svg"
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#013243] to-[#B0E0E6] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <div className="relative">
          <Link to="/" className="relative"><img src= {yumyum} alt='YumYum' className="w-16 h-16  "></img></Link>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 ">
          <Link to="/" className="text-white hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out">Home</Link>
          <Link to="/menu" className="text-white hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out">Menu</Link>
          <Link to="/sign-in" className="text-white hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out">Login</Link>
          <Link to="/map" className="text-white hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out">Map Restaurants</Link>
          <Link to="/Registration" className="text-white hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out" >Registration</Link>
          <Link to="/About-us" className="text-white hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out" > About Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? 'Close' : <FontAwesomeIcon icon={faBars} className='text-black' />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#B0E0E6] border-b-1">
          <Link to="/home" className="block px-4 py-2 text-black border-b border-black">Home</Link>
          <Link to="/menu" className="block px-4 py-2 text-black border-b border-black">Menu</Link>
          <Link to="/login" className="block px-4 py-2 text-black border-b border-black">Login</Link>
          <Link to="/map" className="block px-4 py-2 text-black border-b border-black">Map Restaurants</Link>
          <Link to="/Registration" className="block px-4 py-2 text-black border-b border-black" >Registration</Link>
          <Link to="/About-us" className="block px-4 py-2 text-black border-black" >About Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

