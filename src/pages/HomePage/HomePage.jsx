import React from "react";
import Main from "./Main/Main";
import It from "./It/It";
import Our from "./Doctor/Our";
import Services from "./Services/Services";
import WhyUs from "./whyUs/WhyUs";
import Header2 from "../../component/Header2/Header2";
import Hedaer from "../../component/Header/Hedaer";
import Footer from "../../component/Footer/Footer";
import blurImg from "../../assets/blurImg.svg";
import blurImg2 from "../../assets/blurImg2.svg";
import blurImg3 from "../../assets/blurImg3.svg";
import tish2 from "../../assets/tish2.svg";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hedaer />
        <Header2 />
      </div>
      <div className="container"> 
      <div style={{ position: "relative" }}>
        <img
          style={{
            position: "absolute",
            opacity: "65%",
            zIndex: "-100",
            top: "-200px",
            right: "-130px",
          }}
          src={blurImg}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            opacity: "30%",
            zIndex: "-100",
            top: "-10px",
            right: "110px",
          }}
          src={tish2}
          alt=""
        />
      </div>
        <Main />
        <div className="container">
          <div style={{position: 'relative'}}>
            <img style={{position: 'absolute', top: '90px', zIndex: '-999', left: '-130px'}} src={blurImg2} alt="" />
          </div>
        </div>
        <It />
        <Our />
        <Services />
        <div className="container">
          <div style={{position: 'relative'}}>
            <img style={{position: 'absolute', top: '-400px', zIndex: '-999',right: '-130px'}} src={blurImg3} alt="" />
          </div>
        </div>
      </div>
      <WhyUs />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
