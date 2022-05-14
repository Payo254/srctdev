import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import * as mainStyle from "./assets/css/styles.css";
import Contract from "components/Contract/Contract";
import MenuItems from "./components/MenuItems";
import Home from "./components/home/Home";
import logo from "./images/logo.png";

const { Header } = Layout;

const styles = {
  content: {
    justifyContent: "center",
    fontFamily: "Lato, sans-serif",
    color: "#041836",
    marginTop: "0px",
    padding: "10px",
  },
  header: {
    background: "#fff",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    color: "#0F1AAD",
    borderRadius: "0",
    boxShadow: "none",
    border: "none",
    marginBottom: "0",
  },
  mainStyle: mainStyle,
};
const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout className="layout">
      <Router>
        <Header className="header">
          {/* <Logo /> */}
          <MenuItems />
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            {/* <Route path="/onramp">
              <Ramper />
            </Route> */}
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/satoshirealcoin">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
    </Layout>
  );
};
export const Logo = () => (
  <div style={{ display: "flex" }}>
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <img src={logo} alt="logo" className="w-24 cursor-pointer" />
    </div>{" "}
  </div>
);

export default App;
