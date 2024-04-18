import React from "react";
import "./WhyUs.scss";

const content = [
  {
    name: "ВАШ КОМФОРТ",
    p: "Мы работаем для вашего комфорта, подберем",
    p2: "удобное вам время и нужного специалиста для",
    p3: "своевременного лечения",
  },
  {
    name: "ОПЫТНЫЕ СТОМАТОЛОГИ",
    p: "Наш коллектив состоит из опытных",
    p2: "профессионалов своего дела, которые с заботой",
    p3: "проведут все необходимые процедуры",
  },
  {
    name: "ПЕРЕДОВОЕ ОБОРУДОВАНИE",
    p: "Мы оснастили нашу клинику современным оборудованием для",
    p2: "предоставления стоматологических услуг на высоком уровне",
    p3: "",
  },
  {
    name: "ГАРАНТИЯ НА УСЛУГИ",
    p: "Мы предоставляем гарантию на оказанную нами услугу,",
    p2: "мы ценим ваш выбор и нашу репутацию",
    p3: "",
  },
  {
    name: "ШИРОКИЙ СПЕКТР УСЛУГ",
    p: "Мы оснастили нашу клинику современным оборудованием",
    p2: "для предоставления стоматологических услуг на высоком",
    p3: "уровне",
  },
  {
    name: "ЛЕЧЕНИЕ ДЛЯ ВСЕЙ СЕМЬИ",
    p: "Мы позаботимся о всех членах вашей семьи. Дети, подростки,",
    p2: "взрослые и пожилие могут получить качественную",
    p3: "стоматологическую услугу",
  },
];

const WhyUs = () => {
  return (
    <section className="container">
      <div>
        <div
          className="seac5__hr"
          style={{ display: "flex", justifyContent: "center" }}
        >
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
            ПОЧЕМУ МЫ?
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
        <hr style={{ marginTop: "40px", marginBottom: "24px" }} />

        <div className="seac5-card">
          {content.map((e) => {
            return (
              <div className="seac5-content">
                <h4>{e.name}</h4>
                <p>
                  {e.p} <br /> {e.p2} <br /> {e.p3}
                </p>
              </div>
            );
          })}
        </div>
        <center>
          <hr style={{ width: "70%", marginTop: "80px" }} />
        </center>
        <p style={{ color: "#53a8bb", marginBottom:' 60px', textAlign: "center", marginTop: "40px" }}>
          Мы будем рады видеть Вас в наших клиниках!
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
