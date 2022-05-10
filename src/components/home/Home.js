import { Navbar, Welcome, Footer, Services, Transactions } from ".";
import bgone from "../../images/bgone.jpg";
import bg2 from "../../images/bg2.jpg";

const Home = () => (
  <div className="min-h-screen">
    <div className="">
      <div className="">
        <img
          className="img-fluid"
          src={bgone}
          alt="Satochi Real Coin"
          width="100%"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="1000"
          // style={{ maxHeight: "30rem" }}
        />
        {/* <img src={bgone} alt="logo" className="w-full object-cover" /> */}
      </div>
      <Welcome />
      <Navbar />
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
