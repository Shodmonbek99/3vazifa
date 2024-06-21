import React from 'react';
import { TiAdjustBrightness } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";

interface NavbarProps {
  toggleDarkMode: () => void;
  cartItems: number;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, cartItems }) => {
  return (
    <nav className="navbar">
      <h1>Product Store</h1>
      <div className="nav-items">
        <button onClick={toggleDarkMode}> <span> { toggleDarkMode ? <TiAdjustBrightness /> : <MdDarkMode />}</span> </button>
        <div className="cart">
          <span>Cart:{cartItems}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
