import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="justify-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`rounded-full flex justify-center items-center ${color}`}>
      {icon}
      &nbsp;
      <h3 className="outline-offset-0 text-lg items-end text-white">{title}</h3>
    </div>
    <div className="flex flex-col flex-1">
      <p className="mt-1 text-[#000] text-sm text-justify md:w-12/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="">
    <div className="">
      <div className="">
        <h1 className=" text-3xl sm:text-5xl py-2 text-center text-[#0f1aad]">
          Satoshi Real
          <br />
          Coin & Ecosystem
        </h1>
        <p className="font-light text-[#000] m-10 text-justify">
          SAR token has by itself real estate projects as a backup real asset.
          Unlike meme coins that have no actual projects, SRC targets to achieve
          a consensus real estate ownership mechanism to its community by
          investing in commercial real estate, open source code 2-layer network
          that would enable young developers to bring solutions to humanity
          through developing their projects with very low network charges which
          will be achieved through merge between PoH, PoS and PoW consensus
          mechanism that would also be scaled.
        </p>
      </div>

      <div className="inline-flex flex-row justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Satoshi Team"
          icon={
            <BsShieldFillCheck
              fontSize={21}
              className="text-white"
              fill={"white"}
            />
          }
          subtitle="The SRC team has a strong track record in hedge fund management, development of marketplaces, trading terminals and has developed companies such as Dollar Code corporation and microfinances that offer lending services to millions of people across the world."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Liquidity "
          icon={
            <BiSearchAlt fontSize={21} className="text-white" fill={"white"} />
          }
          subtitle="SRC is the main currency for trading asset tokens as it is used for market making and liquidity enhancement by the SAR liquidity fund. Thus, the demand for SAR correlates with trading volume on the SATOSHI REAL COIN platform."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Satoshi Vision"
          icon={
            <RiHeart2Fill fontSize={21} className="text-white" fill={"white"} />
          }
          subtitle="Total value of asset cryptocurrencies could reach $10 trillion by 2030 with global trading volume exceeding $90 trillion. The value of asset cryptocurrencies traded on the SATOSHI REAL COIN network platform could reach $2 trillion by 2030 with trading volume exceeding $20 trillion"
        />
      </div>
    </div>
  </div>
);

export default Services;
