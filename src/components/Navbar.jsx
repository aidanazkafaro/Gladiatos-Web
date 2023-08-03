import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from '../styles';
import '../styles/globals.css';
import logo from '../assets/gladiatos-logo.png';
import menu from '../assets/menu.svg';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    setNavbarOpen(false);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarBg(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${styles.xPaddings} py-4 z-30 fixed top-0 left-0 w-full ${
        navbarBg
          ? 'bg-gray-800 text-white transition-colors duration-500 '
          : ' text-gray-800 transition-colors duration-700 '
      } ${navbarOpen ? 'bg-gray-800 ' : ''}`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01 z-10" /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex flex-wrap justify-between gap-8 items-center`}
      >
        <img
          src={logo}
          alt="Gladiatos UI"
          className="w-[55px] h-[55px] object-contain  z-10"
        />
        <div className="md:hidden relative float-right">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <img
                src={menu}
                alt="menu"
                className="w-[36px] h-[36px] object-contain z-10"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={` w-full md:w-2/3 z-20 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition ease-in-out duration-300 ${
            navbarOpen ? 'block ' : 'hidden '
          }`}
        >
          <ul className="items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white cursor-pointer">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li className="text-white cursor-pointer">
              <RouterLink to="/team">Team Structure</RouterLink>
            </li>

            <li className="text-white cursor-pointer">
              <RouterLink to="/articles">Articles</RouterLink>
            </li>
          </ul>
        </div>

        {/* <h2 className='font-extrabold text-[36px] leading-[30px] text-white'>
        Gladiatos UI
      </h2> */}
      </div>
    </nav>
  );
};

export default Navbar;
