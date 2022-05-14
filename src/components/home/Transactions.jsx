import React, { useState } from "react";
import team from "../../images/team.jpg";
import products from "../../images/products.jpg";
import market from "../../images/market.jpg";

function Transactions() {
  const [img, setImg] = useState(false);
  const [pic, setPic] = useState();
  let toggle = true;
  const handleClick = (props) => {
    // img && (toggle = false);
    if (props === "Core Team") {
      setPic(team);
      setImg(toggle);
    }
    if (props === "View Products") {
      setPic(products);
      setImg(toggle);
    }
    if (props === "Join Community") {
      //add social media link (twitter or github)
      window.open(
        "https://twitter.com/satoshirealcoin?t=VhKeyVBNZyrM0CYX6Yxvlg&s=09",
      );
    }
    if (props === "Market") {
      setPic(market);
      setImg(toggle);
    }
  };
  const TransactionsCard = (props) => {
    console.log(props.obj);

    return (
      <div
        className=" m-3 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="display-flex justify-start w-full mb-6 p-2">
            <h3 className="text-gradient text-3xl text-center my-2">
              {props.obj.header}
            </h3>
          </div>
          {/* <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        /> */}
          <div className=" p-3 px-5 rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#3a0c0c] font-bold text-1xl text-start my-2">
              {props.obj.body}
            </p>
            <ol className="text-[#3a0c0c] font-bold text-1xl text-start my-2">
              {props.obj.list?.map((obj) => <li>{obj}</li>) ?? props.obj.list}
            </ol>
          </div>
          <button
            type="button"
            onClick={() => handleClick(props.obj.button)}
            className="text-blue-900 w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] hover:text-white rounded-full cursor-pointer"
          >
            {props.obj.button}
          </button>
        </div>
      </div>
    );
  };

  const Transaction = () => {
    const arr = [
      {
        header: "Liquidity Farming",
        body: "SATOSHI Real Coin facilitates the broad use of cryptocurrencies in the real economy and allows holders to diversify their portfolio by a liquidity pool developed based on the AMM (Automatic Market Maker) principle. Just like any other DeFi swap,You can provide liquidity in the pools to become a liquidity provider and earn transaction fees and flexible interest.",
        button: "View Products",
      },
      {
        header: "Core Team",
        body: "SATOSHI Real Coin  Founder and CEO Hassan Maube previously founded a profitable home equity lending marketplace that facilitated 12,000 home equity offers from seven banks and 25 investors in 1H 2018, created a back office for two hedge funds and managed equity portfolios for 5 years.",
        button: "Core Team",
      },
      {
        header: "Value Proposition",
        body: "Our community can benefit from owning apart of our real estate units: satoshi mall, satoshi tower and satoshi palace residential estates. SRC offers a unique opportunity for crypto-holders to gain exposure to the value of illiquid assets accessible only to large investors (such as real estate and artwork) and thus increase their ROI and diversify their portfolio.",
        button: "Join Community",
      },
      {
        header: "Market Place",
        body: `The SATOSHI Real Coin marketplace allows users to: `,
        list: [
          "1. Offer asset tokens for initial sale",
          "2. Manage a personal portfolio",
          "3. An asset owner can create and sell their asset tokens in the SRC marketplace providing the necessary asset information, ask price and settlement date.",
          "As soon as all the necessary legal proceedings are complete, asset tokens become available for purchase by all registered crypto-holders.",
        ],
        button: "Market",
      },
    ];
    return (
      <>
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
          <div className="flex flex-col md:p-12 py-12 px-3">
            <h3 className="text-gradient text-3xl text-center my-2">
              Explore the Network
            </h3>
            <h3 className="text-[#3a0c0c] text-3xs text-center my-2">
              Connect your account to Swap Token
            </h3>
            <div className="flex flex-wrap justify-center items-center mt-10">
              {arr.map((obj, i) => (
                <TransactionsCard key={i} obj={obj} />
              ))}
            </div>
          </div>
        </div>
        {img && (
          <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <img src={pic} alt="pic" className="w-full " />
          </div>
        )}
      </>
    );
  };
  return Transaction();
}
export default Transactions;
