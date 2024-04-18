import React from "react";
import serImg4 from "../../../assets/serImg4.svg";

const Resoration = () => {
  const menuService4 = [
    {
      img: serImg4,
      name: "Реставрация",
      name1: "",
      deskriptios:
        "Восстанавливаем анатомическую форму зубов и придаем ей натуральный цвет.",
    },
  ];
  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px 0",
        }}
        className="container"
      >
        <div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "500",
              marginBottom: "24px",
            }}
          >
            ХУДОЖЕСТВЕННАЯ РЕСТАВРАЦИЯ ЗУБОВ
          </h2>
          <div style={{ color: "#000", fontSize: "20px", fontWeight: "400" }}>
            <p style={{ marginBottom: "12px" }}>
              С помощью композитных светоотверждаемых материалов, <br />{" "}
              стоматолог-терапевт, специализирующийся на эстетической <br />{" "}
              реставрации, воссоздает разрушенный зуб. Зуб восстанавливается{" "}
              <br /> путём послойного нанесения материалов. Такая технология{" "}
              <br /> позволяет практически полностью воспроизвести по цвету,
              <br /> прозрачности и прочности природную эмаль. Проводится <br />{" "}
              реставрация так же, как и пломбирование зуба.
            </p>
            <p>
              Хотите, чтобы процедура удаления зуба стала простой <br />
              процедурой, а не внушающей ужас неизбежностью? Тогда вам <br />{" "}
              стоит заглянуть в нашу клинику. Но перед этим давайте убедимся,{" "}
              <br /> действительно ли ваш зуб нуждается в удалении и в каких{" "}
              <br /> случаях не стоит этого делать.
            </p>
          </div>
        </div>
        <div>
          {menuService4.map((v) => {
            return (
              <div
                style={{
                  border: "1px solid #000",
                  backgroundColor: '#fff',
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
      <hr />
    </div>
  );
};

export default Resoration;
