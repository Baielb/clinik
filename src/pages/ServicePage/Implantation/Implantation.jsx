import React from "react";
import serImg3 from "../../../assets/serImg3.svg";

const Implantation = () => {
  const menuService3 = [
    {
      img: serImg3,
      name: "Имплантацияи",
      name1: "протезирование",
      deskriptios:
        "Устанавливаем импланты и натуральные коронки на пустое место зубного ряда.",
    },
  ];
  return (
    <div>
      <section
        style={{ marginTop: "40px", display: "flex", gap: "20px" ,marginBottom: '40px'}}
        className="container"
      >
        <div>
          {menuService3.map((v) => {
            return (
              <div
                style={{
                  border: "1px solid #000",
                  width: "413px",
                  height: "434px",
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
        <div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "500",
              marginBottom: "24px",
            }}
          >
            Имплантация зубов в стоматологии
          </h2>
          <p
            style={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "30px",
            }}
          >
            Имплантация зубов в нашем стоматологическом центре представляет{" "}
            <br /> собой эффективную и качественную процедуру, которая
            осуществляется <br /> ведущими специалистами клиники, является
            абсолютно безболезненной, <br /> надежной и гарантирует в конечном
            итоге прекрасный результат в виде <br />
            гармоничного, красивого и естественного зубного ряда.
          </p>
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "400",
                marginBottom: "1rem",
              }}
            >
              Установка зубного имплантата позволяет:
            </h3>
            <ul style={{fontSize: '20px',fontWeight: '400', marginLeft: '1.5rem'}}>
              <li>
                максимально эффективно восстановить утраченный зубной ряд <br /> или
                один зуб, не повреждая при этом соседних;
              </li>
              <li>
                установить протез несъемного типа и создать дополнительную <br />
                надежную опору;
              </li>
              <li>
                создать качественную и удобную опору с целью улучшения <br /> фиксации
                протеза съемного типа.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};


export default Implantation;
