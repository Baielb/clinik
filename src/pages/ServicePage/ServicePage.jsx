import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Aligner from "./Aligner/Aligner";
import Orthodontics from "./Orthodontics/Orthodontics";
import Hedaer from "../../component/Header/Hedaer";
import Header2 from "../../component/Header2/Header2";
import Footer from "../../component/Footer/Footer";
import Implantation from "./Implantation/Implantation";
import Resoration from "./Resoration/Resoration";
import Surgical from "./Surgical/Surgical";
import Veneers from "./Veneers/Veneers";
import blurImg4 from '../../assets/blurImg4.svg'
import blurImg6 from '../../assets/blurImg6.svg'

const ServicePage = () => {
  return (
    <div>
      <div className="container">
        <div style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              top: "0",
              zIndex: "-999",
              left: "-130px",
            }}
            src={blurImg4}
            alt=""
          />
        </div>
      </div>
      <Hedaer />
      <Header2 />
      <section className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "67px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={"/"}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#000000B2",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Главная
            </Link>
            <MdKeyboardArrowRight
              style={{ width: "24px", height: "24px", color: " #000000B2" }}
            />
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: "500", color: "#000000" }}>
            Наши услуги
          </h3>
        </div>
        <div>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "500",
              color: "#53A8BB",
              textAlign: "center",
              marginTop: "70px",
            }}
          >
            ПОМОГАЕМ ВО ВСЕХ <br /> ЗУБНЫХ СЛУЧАЯХ
          </h3>
        </div>
        <div>
          <Aligner />
          <Orthodontics />
          <div className="container">
              <div style={{ position: "relative" }}>
                <img
                  style={{
                    position: "absolute",
                    zIndex: "-999",
                    opacity: '65%',
                    right: '-125px',
                    marginTop: '30px'
                  }}
                  src={blurImg6}
                  alt=""
                />
              </div>
            </div>
          <Implantation />
          <Resoration />
          <Surgical />
          <Veneers />
        </div>
      </section>
      <Footer />
    </div>
  );
};


export default ServicePage;
