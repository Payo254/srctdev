/* eslint-disable prettier/prettier */
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// import logo from "../../images/lg.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  function handleClick() {
    window.open(
      "https://satoshi-real-coin.gitbook.io/src-whitepaper/introduction/mission",
    );
  }
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      {/* <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div> */}
      <ul className="text-gradient md:flex hidden list-none flex-row justify-evenly w-full items-center flex-initial">
        {/* {["Market", "Exchange", "How to buy SAV", "Docs"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        <li>
          {/* <button
                  type="button"
                  onClick={''}
                  className="text-gradient w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#2546bd] rounded-full cursor-pointer"
                >
                 White Papers
                </button> */}
          <button
            type="button"
            onClick={() => handleClick()}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:text-white rounded-full cursor-pointer"
          >
            White Paper
          </button>
        </li>
        <li>
          {/* <button
                  type="button"
                  onClick={''}
                  className="text-gradient w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#2546bd] rounded-full cursor-pointer"
                >
                 White Papers
                </button> */}
          <button
            type="button"
            onClick={() => handleClick()}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:text-white rounded-full cursor-pointer"
          >
            Road-Map
          </button>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={16}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={16}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              ),
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
