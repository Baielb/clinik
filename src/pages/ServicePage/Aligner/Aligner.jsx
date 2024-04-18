import React from "react";
import serImg1 from "../../../assets/serImg1.svg";

const Aligner = () => {
  const menuService1 = [
    {
      img: serImg1,
      name: "Выравнивание",
      name1: "зубов без брекета",
      deskriptios:
        "Если брекеты вам не подходят, можно выровнять зубы без брекетов с помощью кап-элайнеров.",
    },
  ];


  const ulLI = [
    'практически незаметны;',
    'легко ухаживать за ротовой полостью;',
    'минимальный психологический и физический дискомфорт;',
    'нет ограничений по питанию;',
    'гипоаллергенность (нет металлических элементов);',
    'можно одновременно носить конструкцию и лечить зубы.',
  ]
  return (
    <>
      <section style={{ marginTop: "95px", display: 'flex', gap: '20px', marginBottom: '25px' }}>
        <div>
          {menuService1.map((v) => {
            return (
              <div
                style={{
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
        <div>
          <div>
            <h3 style={{fontSize: '32px',fontWeight: '500',}}>Выравнивание зубов элайнерами</h3>
            <p style={{fontSize: '20px',fontWeight: '400', marginTop: '24px'}}>
              Элайнеры или капы для выравнивания зубов — съемные конструкции,{" "}
              <br /> которые изготавливают из поликарбоната, поэтому они
              практически <br /> незаметны при носке. <br /></p>
              <p style={{fontSize: '20px',fontWeight: '400', marginTop: '10px'}}> Принцип действия элайнеров не отличается от брекетов — они
              медленно <br /> выравнивают положение зубов. Главное отличие в
              том, что брекеты — <br />
              несъемные, а элайнеры— съемные, поэтому результат зависит еще и от{" "}
              <br /> того, не забывает ли пациент носить конструкцию.</p>
          </div>
          <div>
            <h4 style={{fontSize: '24px',fontWeight: '500',marginTop: '24px'}}>Преимущества выравнивания зубов элайнерами:</h4>
            <ul style={{marginTop: '12px', marginLeft: '20px'}}>
                {ulLI.map((j) => {
                    return(
                        <li style={{fontSize: '20px',fontWeight: '400',}}>{j}</li>
                    )
                })}
            </ul>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Aligner;
