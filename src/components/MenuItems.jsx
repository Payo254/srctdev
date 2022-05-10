/* eslint-disable prettier/prettier */
import Account from "./Account/Account";
import NativeBalance from "components/NativeBalance";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import logo from"../assets/img/logo.png";

function MenuItems() {
  // const styles = {
  //   headerRight: {
  //     display: "flex",
  //     gap: "20px",
  //     alignItems: "center",
  //     fontSize: "15px",
  //     fontWeight: "600",
  //   },
  // };
  return (
    <div className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container">
        <a className="navbar-brand" href="/home">
          SRC Token
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item" role="presentation">
              <a href="/home"><i className="fa-solid fa-sack-dollar"></i> SRC Token</a>
            </li>
            {/* <li className="nav-item" key="/wallet">
              <a href="/wallet">👛 Wallet</a>
            </li> */}
            <li className="nav-item" role="presentation">
              <a href="/1inch"><i className="fa-solid fa-coins"></i> Satoshi Swap</a>{/* 🏦 */}
            </li>
            {/* <li className="nav-item" role="presentation">
              <a href="/onramp">💵 Fiat</a>
            </li> */}
            <li className="nav-item" role="presentation">
              <a href="/erc20balance"><i className="fa-solid fa-file-invoice-dollar"></i> Balances</a> {/* 💰 */}
            </li>
            <li className="nav-item" role="presentation">
              <a href="/erc20transfers"><i className="fa-solid fa-wallet"></i> Transfers</a>{/* 💸 */}
            </li>
            {/* <li className="nav-item" role="presentation">
              <a href="/nftBalance">🖼 Real Assets</a>
            </li> */}
            <li className="nav-item" role="presentation">
              <a href="/contract"><i className="fa-solid fa-briefcase"></i> Contract</a>{/* 📄 */}
            </li>
          </ul>
          <Chains />
          <TokenPrice
            address="0x38fb090891ad01aeee9e58775f3dc7dd4bdaed61"
            chain="bsc"
            image={logo}
            size="30px"
          />
          <NativeBalance />
          <Account />
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
