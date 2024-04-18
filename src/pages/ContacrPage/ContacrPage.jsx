import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ContacrPage.scss";
import karta from "../../assets/karta.svg";
import Hedaer from "../../component/Header/Hedaer";
import Header2 from "../../component/Header2/Header2";
import Footer from "../../component/Footer/Footer";
import blurImg4 from '../../assets/blurImg4.svg'

const ContacrPage = () => {
  return (
    <div>
      <div className="container">
        <div style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              top: "0",
              zIndex: "-999",
              left: "-125px",
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
            Контакты
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                marginBottom: "20px",
                marginTop: "200px",
              }}
            >
              <BsGeoAlt
                style={{ width: "50px", color: "#53A8BB", height: "50px" }}
              />
              <p style={{ fontSize: "36px", fontWeight: "500" }}>г. Бишкек</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                marginBottom: "20px",
              }}
            >
              <IoCallOutline
                style={{ width: "50px", color: "#53A8BB", height: "50px" }}
              />
              <p style={{ fontSize: "28px", fontWeight: "500" }}>
                + 996 (704) 678 485
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                marginBottom: "20px",
              }}
            >
              <CiClock2
                style={{ width: "50px", color: "#53A8BB", height: "50px" }}
              />
              <p style={{ fontSize: "28px", fontWeight: "500" }}>
                Ежедневно : Пн - Пт с 08:30 до 18:30 <br /> Сб с 09:00 до 15:00
                Вс- выходной
              </p>
            </div>
          </div>
          <div className="border-container">
            <img src={karta} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContacrPage;
