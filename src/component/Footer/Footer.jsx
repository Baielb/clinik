import React from "react";
import "./Footer.scss";
import footIcon from "../../assets/foot-icon.svg";
import footInst from "../../assets/foot-inst.svg";
import footFecebook from "../../assets/footr-fecebook.svg";
import footUtub from "../../assets/foot-utub.svg";
import { BsGeoAlt } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#53A8BB",
      }}
    >
      <footer style={{ paddingTop: "70px" }} className="container">
        <div className="foot-display">
          <div>
            <div style={{ marginBottom: "35px" }}>
              <img src={footIcon} />
            </div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#fff",
                marginBottom: "45px",
              }}
            >
              + 996 (704) 678 485
            </h2>
            <div
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "24.38px",
              }}
            >
              <p>Стоматология “Safe.Clinic”</p>
              <p>
                <span style={{ color: "#000" }}>©</span> 2022. Все права
                защищены
              </p>
              <p>Мы осуществляем прием детей и взрослых</p>
              <p>Cтоматологическая клиника Safe.Clinic</p>
            </div>
          </div>
          <div>
            <div className="foot__second">
              <h4
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                О клинике
              </h4>
              <p
                style={{
                  color: "#fff",
                  marginTop: "12px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Мы работаем по <br /> новейшим методикам в <br /> сфере лечения
                и <br />
                протезирования зубов.
              </p>
              <p
                style={{
                  color: "#fff",
                  marginTop: "12px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Наша главная цель - <br /> сделать вас чуточку <br />{" "}
                счастливее, чем вы <br /> есть сегодня.
              </p>
              <p
                style={{
                  color: "#fff",
                  marginTop: "12px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Наша миссия — <br /> дарить вам <br /> прекрасную и <br />{" "}
                здоровую <br /> улыбку.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div style={{ color: "#fff" }} className="foot__thert">
                <h4
                  style={{
                    fontSize: "24px",
                    marginBottom: "12px",
                  }}
                >
                  Контакты
                </h4>
                <div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      <BsGeoAlt style={{ width: "32px", height: "32px" }} />
                      <p>г. Бишкек</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      <IoCallOutline
                        style={{ width: "32px", height: "32px" }}
                      />
                      <p>+ 996 (704) 678 485</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      <CiClock2 style={{ width: "32px", height: "32px" }} />
                      <p>Пн-Пт: с 9:00 до 18:30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4
                  style={{
                    marginTop: "105px",
                    color: "#fff",
                    fontSize: "24px",
                  }}
                >
                  Мы в соц. сетях
                </h4>
                <br />
                <div style={{ display: "flex", gap: "35px" }}>
                  <span>
                    <a href="https://www.instagram.com/aybekovich_i._b/">
                      <img src={footInst} />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/aybekovich_i._b/">
                      <img src={footFecebook} />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/aybekovich_i._b/">
                      <img src={footUtub} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "90px", marginBottom: "1rem" }} />
        <div style={{ color: "#fff" }}>
          <p
            style={{ marginBottom: "5px", fontSize: "20px", fontWeight: "400" }}
          >
            «Safe.Clinic» — это инновации, технологии, успешное будущее и
            конечно ваши здоровые и красивые зубы.
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
              paddingBottom: "60px",
            }}
          >
            Все условия для вашей безопасности. Усиленные санитарные меры в
            клинике.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
