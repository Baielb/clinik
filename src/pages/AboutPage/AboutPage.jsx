import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Safe from "./Safe/Safe";
import NetWork from "./NetWork/NetWork";
import Advantages from "./Advantages/Advantages";
import Hedaer from "../../component/Header/Hedaer";
import Header2 from "../../component/Header2/Header2";
import Footer from "../../component/Footer/Footer";
import blurImg4 from "../../assets/blurImg4.svg";
import blurImg5 from "../../assets/blurImg5.svg";

const AboutPage = () => {
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
            О клинике
          </h3>
        </div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#53A8BB",
            textAlign: "center",
            marginTop: "74px",
          }}
        >
          Стоматологическая клиника safe.clinic
        </h2>
        <div
          style={{
            border: "1px solid #fff",
            marginTop: "90px",
            borderRadius: "35px",
            backgroundColor: "#fff",
            marginBottom: "76px",
            boxShadow: "0px 0px 4px 4px #00000040",
          }}
        >
          <div style={{ paddingLeft: "88px", paddingRight: "100px" }}>
            <Safe />
            <NetWork />
            <div className="container">
              <div style={{ position: "relative" }}>
                <img
                  style={{
                    position: "absolute",
                    top: "-460px",
                    zIndex: "-999",
                    left: "22.8%",
                  }}
                  src={blurImg5}
                  alt=""
                />
              </div>
            </div>
            <Advantages />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
