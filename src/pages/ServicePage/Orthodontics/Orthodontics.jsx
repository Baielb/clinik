import React from "react";
import serImg2 from '../../../assets/serImg2.svg'

const Orthodontics = () => {
  const menuService2 = [
    {
      img: serImg2,
      name: "Ортодонтия",
      name1: "",
      deskriptios:
        "Корректируем неправильный прикус и расположение зубов с помощью брекетов.",
    },
  ]
  return (
    <div>
      <section style={{display: 'flex', marginBottom: '40px', justifyContent: 'space-between', alignItems: 'center'}} className="container">
        <div>
          <h2
            style={{
              marginTop: "40px",
              fontSize: "32px",
              fontWeight: "500",
              marginBottom: "24px",
            }}
          >
            Ортодонтия
          </h2>
          <div style={{fontSize: '20px',fontWeight: '400',lineHeight: '24.38px',}}>
            <p>
              К счастью, так было раньше - сейчас же исправление прикуса это:
            </p>
            <ul
              style={{
                marginTop: "1ex",
                marginBottom: "1ex",
                marginLeft: "2rem",
              }}
            >
              <li>не больно;</li>
              <li>достаточно быстро;</li>
              <li>может быть простым и незаметным.</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              Как? Все это знают врачи нашей клиники - и они с удовольствием
              поделятся с <br /> вами своими знаниями: расскажут, как происходит
              исправление прикуса, что <br /> для этого используется и сколько
              времени занимает вся процедура. Самое <br /> главное - для
              получения этой информации вам не нужно отправляться в <br />{" "}
              клинику - узнать перечисленную информацию вы сможете через
              несколько <br /> секунд. Начнем?
            </p>
            <p>Для чего необходимо исправлять прикус?</p>
          </div>
        </div>
        <div>
        {menuService2.map((v) => {
            return (
              <div
                style={{
                  marginTop: '40px',
                  border: "1px solid #000",
                  width: "413px",
                  height: '434px',
                  borderRadius: "15px",
                }}
              >
                <div style={{ padding: "26px 37px" }}>
                  <div style={{ textAlign: "center", marginBottom: "35px" }}>
                    <img src={v.img} alt="" />
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      textAlign: "center",
                      color: "#53a8bb",
                      marginBottom: "14px",
                    }}
                  >
                    {v.name} <br /> {v.name1}
                  </h4>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textAlign: "left",
                      color: "#000000",
                      marginLeft: "35px",
                      width: "263px",
                    }}
                  >
                    {v.deskriptios}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Orthodontics;
