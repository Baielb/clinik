import React from "react";
import serImg6 from "../../../assets/serImg6.svg";

const Veneers = () => {
  const menuService6 = [
    {
      img: serImg6,
      name: "Виниры",
      name1: "",
      deskriptios: "Создаем белоснежную улыбку с помощью несъемных накладок.",
    },
  ];
  return (
    <div>
      <section
        style={{
          display: "flex",
          color: "#000",
          justifyContent: "space-between",
          margin: "40px 0 100px",
        }}
        className="container"
      >
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "500" }}>ВИНИРЫ</h2>
          <div style={{fontSize: '20px',fontWeight: '400',lineHeight: '24.38px', marginTop: '24px'}}>
            <p>Виниры — один из самых быстрых, комфортных и надежных способов <br /> добиться идеальной «голливудской» улыбки. Тонкие пластинки, которые <br /> корректируют внешнюю поверхность зубов, сохраняют эстетический<br /> внешний вид на долгие годы.</p>
            <p style={{marginTop: '1ex', marginBottom: '1ex'}}>Виниры устранят такие дефекты, как потемнение пломбы и  <br />запломбированных каналов, флюороз, тетрациклиновые зубы. Применяют <br /> такую технологию при стираемости зубов, при травмах и сколах. Виниры <br />  также устанавливают взамен лечения брекетами, чтобы убрать 
            <br />промежутки между зубами. Однако, если есть серьезные нарушения <br /> прикуса, то скорректировать неровность зубного ряда помогут посещения <br /> ортодонта.</p>
            <p>Виниры — это аnti-age стоматология. Это омолаживающий эффект: зубы <br /> белые, здоровые и крепкие, резцы видны при улыбке и при разговоре. <br /> Установка виниров — это еще и защита. Восстановленный зуб <br /> приобретает прочность.</p>
          </div>
        </div>
        <div>
          {menuService6.map((v) => {
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
      </section>
    </div>
  );
};

export default Veneers;
