import React from "react";
import serImg1 from "../../../assets/serImg1.svg";
import serImg2 from "../../../assets/serImg2.svg";
import serImg3 from "../../../assets/serImg3.svg";
import serImg4 from "../../../assets/serImg4.svg";
import serImg5 from "../../../assets/serImg5.svg";
import serImg6 from "../../../assets/serImg6.svg";
import "./Services.scss";
import { Link } from "react-router-dom";

const ServicesCatalog = [
  {
    img: serImg1,
    name: "Выравнивание",
    name1: "зубов без брекета",
    deskriptios:
      "Если брекеты вам не подходят, можно выровнять зубы без брекетов с помощью кап-элайнеров.",
  },
  {
    img: serImg2,
    name: "Ортодонтия",
    name1: "",
    deskriptios:
      "Корректируем неправильный прикус и расположение зубов с помощью брекетов.",
  },
  {
    img: serImg3,
    name: "Имплантацияи",
    name1: "протезирование",
    deskriptios:
      "Устанавливаем импланты и натуральные коронки на пустое место зубного ряда.",
  },
  {
    img: serImg4,
    name: "Реставрация",
    name1: "",
    deskriptios:
      "Восстанавливаем анатомическую форму зубов и придаем ей натуральный цвет.",
  },
  {
    img: serImg5,
    name: "Хирургия",
    name1: "",
    deskriptios:
      "Удаляем зубы и инородные образования, занимаемся пластикой уздечек губ и языка при рассечении.",
  },
  {
    img: serImg6,
    name: "Виниры",
    name1: "",
    deskriptios: "Создаем белоснежную улыбку с помощью несъемных накладок.",
  },
];

const Services = () => {
  return (
    <section className="container" style={{ marginTop: "70px" }}>
      <div style={{ display: "flex", justifyContent: "center",}}>
        <div
          style={{
            border: "1px solid #0000004d",
            width: "100px",
            height: "0",
            marginTop: "1.3%",
            marginRight: "32px",
          }}
        ></div>
        <div
          style={{ color: "#53a8bb", fontSize: "34px", textAlign: "center" }}
        >
          Наши услуги
        </div>
        <div
          style={{
            border: "1px solid #0000004d",
            width: "100px",
            height: "0",
            marginTop: "1.3%",
            marginLeft: "32px",
          }}
        ></div>
      </div>
      <div>
        <center>
          <h2
            style={{
              width: "379px",
              fontSize: "32px",
              textAlign: "center",
              marginTop: "24px",
              fontWeight: "500",
              marginBottom: "60px",
            }}
          >
            ПОМОГАЕМ ВО ВСЕХ ЗУБНЫХ СЛУЧАЯХ
          </h2>
        </center>
      </div>

        <Link style={{textDecoration: 'none'}} to={'/service'}>
      <div className="service-cards">
        {ServicesCatalog.map((s) => {
          return (
              <div className="service__card">
                <div className="service-padding">
                  <div>
                    <img src={s.img} alt="" />
                  </div>
                  <h4>
                    {s.name} <br /> {s.name1}
                  </h4>
                  <p>{s.deskriptios}</p>
                </div>
              </div>
          );
        })}
      </div>
            </Link>
    </section>
  );
};

export default Services;
