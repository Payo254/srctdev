import "../assets/css/Navigation-with-Button.css";

function MenuItems() {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
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
              <a href="/home">SRC Token</a>
            </li>
            {/* <li className="nav-item" key="/wallet">
              <a href="/wallet">👛 Wallet</a>
            </li> */}
            <li className="nav-item" role="presentation">
              <a href="/1inch">🏦 Satoshi Swap</a>
            </li>
            {/* <li className="nav-item" role="presentation">
              <a href="/onramp">💵 Fiat</a>
            </li> */}
            <li className="nav-item" role="presentation">
              <a href="/erc20balance">💰 Balances</a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="/erc20transfers">💸 Transfers</a>
            </li>
            {/* <li className="nav-item" role="presentation">
              <a href="/nftBalance">🖼 Real Assets</a>
            </li> */}
            <li className="nav-item" role="presentation">
              <a href="/contract">📄 Contract</a>
            </li>
          </ul>
          <span className="navbar-text actions">
            <a className="btn btn-light action-button" role="button" href="#">
              Connect
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default MenuItems;
