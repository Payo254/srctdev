import React from "react";
import { SocialIcon } from "react-social-icons";
// import logo from "../../images/lg.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <SocialIcon url="https://twitter.com/satoshirealcoin?t=VhKeyVBNZyrM0CYX6Yxvlg&s=09" />
        <SocialIcon url="https://www.facebook.com/satoshirealcoin/" />
        <SocialIcon url="https://t.me/+wPC3qJFikNBjMDJk" network="telegram" />
        <SocialIcon
          url="https://satoshi-real-coin.gitbook.io/src-whitepaper/introduction/mission"
          network="github"
        />
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-gradient text-sm text-center">
        Come join us and create real estate wealth
      </p>
      <p className="text-gradient text-sm text-center font-medium mt-2">
        info@satoshirealcoin.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-gradient text-left text-xs">@satoshirealcoin2022</p>
      <p className="text-gradient text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
