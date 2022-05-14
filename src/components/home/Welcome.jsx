/* eslint-disable prettier/prettier */
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import logo from "../../images/logo.png";
// import real from "../../images/real.jpg";
import Address from "./Address";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  function handleClick(url) {
    window.open(url);
  }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 ">
          <h1 className="text-4xl sm:text-6xl  text-gradient py-1">
            Satoshi Real <br /> Coin
          </h1>
          <p className="text-left mt-5 text-[#3a0c0c] font-light md:w-9/12 w-11/12 text-base">
            SATOSHI REAL COIN is the future that we have created for you to own
            real estate wealth through it. Holding SRC coins is unlocking your
            financial capabilities not only to live up to your dreams but also
            to have a sense of belonging regardless of your background. We
            extensively invest in Real-Estate, envisioning Satoshi Mall, Satoshi
            Tower, and Satoshi Apartments.{" "}
          </p>
          <div className="max-w-xl rounded overflow-hidden shadow-lg mt-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                SRC Token Pre-Sale Address
              </div>
              <Address />
              <p className="text-gray-700 text-base">
                Pre-sale supply: 42,000,000,000 SRC Token
              </p>
              <p className="text-gray-700 text-base">
                Pre-sale price: 1 SRC Token = 0.03 USD
              </p>
              <p className="text-gray-700 text-base">
                The minimum purchase is $150 (5,000 SRC), and the maximum
                purchase is 0.1% total supply (4,200,000,000 SRC Token =
                126,000,000 USD)
              </p>
              <div className="font-bold text-xl mb-2">
                We Accept All Crypto.
              </div>
              <p className="text-gray-700 text-base">
                Send Crypto from your wallet to the pre-sale address above. Our
                system will send SRC tokens to your wallet immediately.
              </p>
            </div>
            <p className="text-blue-700 text-base px-6 ">Join Our Community</p>
            <div className="px-6 pt-2 pb-2">
              <span
                onClick={() =>
                  handleClick(
                    "https://twitter.com/satoshirealcoin?t=VhKeyVBNZyrM0CYX6Yxvlg&s=09",
                  )
                }
                className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-blue-900 mr-2 mb-2 cursor-pointer"
              >
                #twitter
              </span>
              <span
                onClick={() => handleClick("https://t.me/+wPC3qJFikNBjMDJk")}
                className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-blue-900 mr-2 mb-2 cursor-pointer"
              >
                #telegram
              </span>
              <span
                onClick={() =>
                  handleClick(
                    "https://satoshi-real-coin.gitbook.io/src-whitepaper/introduction/mission",
                  )
                }
                className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-blue-900 mr-2 mb-2 cursor-pointer"
              >
                #github
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div
              className={`text-[#3a0c0c] rounded-tl-2xl ${companyCommonStyles}`}
            >
              Real Estate
            </div>
            <div className={`text-[#3a0c0c] ${companyCommonStyles}`}>
              Security
            </div>
            <div
              className={`text-[#3a0c0c] sm:rounded-tr-2xl ${companyCommonStyles}`}
            >
              Build on Binance Chain
            </div>
            <div
              className={`text-[#3a0c0c] sm:rounded-bl-2xl ${companyCommonStyles}`}
            >
              Web 3.0
            </div>
            <div className={`text-[#3a0c0c] ${companyCommonStyles}`}>
              Blockchain
            </div>
            <div
              className={`text-[#3a0c0c] rounded-br-2xl ${companyCommonStyles}`}
            >
              Low property commission
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div
            style={{
              // backgroundImage: `url(${real})`,
              fontSize: "50px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card "
          >
            <div className="flex justify-between flex-col w-full h-full">
              <div>
                <p className="text-[#0e049c] font-bold text-xl mt-1">
                  Satoshi Real
                </p>
                <p className="text-[#3a0c0c] font-bold text-xl">
                  Real estate royalty virtual card
                </p>
              </div>
              <div className="flex justify-between items-start">
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                  <img src={logo} alt="logo" className="w-12 h-12" />
                </div>
                <div className="py-5">
                  <BsInfoCircle fontSize={17} color="#00ff00" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <h1 className="text-3xl sm:text-4xl text-white text-gradient py-1">
              Satoshi Swap
            </h1>
            <ul>
              <li>
                Connect your wallet to the Satoshi Swap by clicking Authenticate
                button at{" "}
                <span className="text-[#562ABF]">Top Right Corner</span>.
              </li>
              <br />
              <li>
                Select the token you wish to trade and SRC as token you wish to
                receive. Click on{" "}
                <span className="text-[#562ABF]">Select a token </span>and
                browse the list to find your token. You can also search by token
                name, symbol, or token address.
              </li>
              <br />
              <li>
                Next, enter the amount that you wish to trade. You can enter
                either your desired input amount or output amount.
              </li>
              <br />
              <li>
                Press the 'Swap' button to view a preview of your swap. This
                screen will show all the details of your trade
              </li>
            </ul>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button
              type="button"
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Swap Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
