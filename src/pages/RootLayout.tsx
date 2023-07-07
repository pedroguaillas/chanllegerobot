import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../components/Layout/Header';
import Navbar from '../components/Layout/Navbar';

interface Props {
  children: String | JSX.Element | JSX.Element[];
}
const RootLayout = ({ children }: Props) => {
  const openMenu = () => {
    let menu = document.getElementById('menu') as HTMLElement;
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      menu.classList.add('left-0');
    }
  };

  return (
    <>
      <div className="container mx-auto xl:px-4">
        <Header />
        <section className="grid grid-cols-1 sm:grid-cols-[18rem_auto]">
          <div className=" lg:hidden absolute z-40 top-0 p-4">
            <svg
              onClick={openMenu}
              width="30px"
              height="30px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#a8a4a4"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#a8a4a4"
                  fill-rule="evenodd"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                ></path>
              </g>
            </svg>
          </div>
          <Navbar />
          <div className=" grid sm:col-span-2 lg:col-span-1">
            <div className=" col-span-1">
              {children}
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default RootLayout;
