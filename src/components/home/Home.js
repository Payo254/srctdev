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
    </div>
    <Services />
    <Navbar />
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <img
        src={bg2}
        alt="logo"
        className="img-fluid"
        data-aos="fade"
        width="100%"
        data-aos-duration="2000"
        data-aos-delay="1000"
      />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default Home;
