import React from "react";
import serImg5 from "../../../assets/serImg5.svg";

const Surgical = () => {
  const menuService5 = [
    {
      img: serImg5,
      name: "Хирургия",
      name1: "",
      deskriptios:
        "Удаляем зубы и инородные образования, занимаемся пластикой уздечек губ и языка при рассечении.",
    },
  ];
  return (
    <div>
      <section
        style={{ display: "flex", gap: "20px", margin: "20px 0" }}
        className="container"
      >
        <div>
          {menuService5.map((v) => {
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
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "500",
              marginBottom: "24px",
            }}
          >
            Хирургическая стоматология
          </h3>
          <h5
            style={{
              fontSize: "24px",
              fontWeight: "500",
              marginBottom: "16px",
            }}
          >
            Удаление зубов без боли и слез
          </h5>
          <p style={{fontSize: '20px',fontWeight: '400', lineHeight: '24.38px'}}>
            Часто бывает, что все старания, направленные на сохранение и лечение <br />
            зуба, бессильны. К сожалению, такое встречается чаще, чем этого <br />
            хотелось бы – и, поэтому, для обеспечения максимально комфортного и <br />
            безболезненного процесса, в нашей клинике действуют специальные<br />
            правила, по которым мы удаляем зубы. <br /><br /> Хотите, чтобы процедура
            удаления зуба стала простой процедурой, а не внушающей ужас
            неизбежностью? Тогда вам стоит заглянуть в нашу <br /> клинику. Но перед
            этим давайте убедимся, действительно ли ваш зуб нуждается в удалении
            и в каких случаях не стоит этого делать.
          </p>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Surgical;
