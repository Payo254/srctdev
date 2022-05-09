import { Navbar, Welcome, Footer, Services, Transactions } from ".";
import bgone from "../../images/bgone.jpg";
import bg2 from "../../images/bg2.jpg";

const Home = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={bgone} alt="logo" className="w-full object-cover" />
      </div>
      <Welcome />
    </div>
    <Services />
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <img src={bg2} alt="logo" className="w-full object-cover" />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default Home;
