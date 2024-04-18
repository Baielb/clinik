import React from "react";
import "./Our.scss";
import ourUser1 from "../../../assets/ourUser1.svg";
import ourUser2 from "../../../assets/ourUser2.svg";
import ourUser3 from "../../../assets/ourUser3.svg";
import tish from "../../../assets/tish.svg";

const tishCategory = [
  {
    img: tish,
    name: "Диагностика",
    name1: "полости рта",
  },
  {
    img: tish,
    name: "Выравнивание",
    name1: " зубов без брекета",
  },
  {
    img: tish,
    name: "Отбеливание",
    name1: "",
  },
  {
    img: tish,
    name: "Лечение кариеса",
    name1: "любой сложности",
  },
  {
    img: tish,
    name: "Ортодонтия",
    name1: "",
  },
  {
    img: tish,
    name: "Выравнивание",
    name1: "зубов с брекетами",
  },
  {
    img: tish,
    name: "Имплантология",
    name1: "",
  },
  {
    img: tish,
    name: "Акция на инпантацию",
    name1: "и протезтрование!",
  },
];

const Our = () => {
  return (
    <>
      <div className="container">
        <div
          class="seac3__hr"
          style={{
            display: "flex",
            marginTop: "70px",
            justifyContent: "center",
          }}
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
            Наши доктора
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
        <div style={{ marginTop: "53px", display: "flex", gap: "20px" }}>
          <img src={ourUser1} />
          <img src={ourUser2} />
          <img src={ourUser3} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "#53a8bb",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          <h4>Терапевт, педиатр</h4>
          <h4>Хирург-имплантолог</h4>
          <h4>Хирург-ортопед</h4>
        </div>

        <div>
          <h3
            style={{ marginTop: "30px", fontSize: "28px", fontWeight: "500" }}
          >
            Мы работаем в таких направлениях :
          </h3>

          <div className="seac3__category">
            {tishCategory.map((a) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "40px",
                  }}>
                    <img src={a.img} alt="" />
                    <p style={{ marginLeft: "34px",fontSize: '16px',fontWeight: '400'}}>{a.name} <br /> {a.name1}</p>
                  </div>
              );
            })}
          </div>
          <div>
          <p style={{fontSize: '18px',fontWeight: '400', lineHeight: '21.94px',}}>
            Каждое направление в стоматологии включает в себя ещё целый спектр
            услуг и может делиться на несколько <br /> категорий. Для того, чтобы
            ознакомиться с нашими услугами вы можете зайти в соответствуйщий
            раздел и выбрать <br /> интересующую вас услугу. Врачи Safe.Clinic
            постоянно проходят повышение квалификации, обучаясь у самых лучших <br />
            специалистов Европы и стан СНГ.
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Our;
