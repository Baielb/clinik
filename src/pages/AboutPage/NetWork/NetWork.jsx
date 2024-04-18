import React from "react";
import "./NetWork.scss";
import netImg from "../../../assets/NetImg.svg";

const NetWork = () => {
  return (
    <>
      <section style={{ marginTop: "70px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "500" }}>
          СЕТЬ СТОМАТОЛОГИЧЕСКИХКЛИНИК <br /> С ДОБРЫМ ПОДХОДОМ
        </h2>
        <div>
          <ul className="ulList">
            <li
              className="liList"
              style={{ marginBottom: "32px", marginTop: "35px" }}
            >
              <p>
                Мы рады встрече с вами на официальном сайте стоматологической
                клиники «Ka Stom» в <br /> Бишкеке. Мы ежедневно доказываем
                своей работой, что качественная стоматологическая <br /> помощь
                должна быть профессиональной, быстрой и доступной. Сегодня
                эстетическая <br /> стоматология - это безопасно и
                безболезненно.
              </p>
            </li>
            <li className="liList">
              <p>
                Наш комплекс отличается особым отношением к своим пациентам.
                Прекрасное <br /> современное инновационное оснащение,
                уникальные передовые технологии, <br /> грамотные специалисты и
                уютная обстановка позволили нам завоевать признание и <br />{" "}
                любовь наших пациентов. Мы, в первую очередь, заботимся о вашем
                здоровье. <br /> Стоматология для нас - это не только работа, но
                и призвание.
              </p>
            </li>
          </ul>
        </div>
        <div style={{display: 'flex', gap: '108px', marginTop:' 80px'}}>
          <div style={{width: '311px', height: '311px', borderRadius: '50%',position: 'absolute',opacity: '40%', marginTop: '-80px',marginLeft: '-90px', backgroundColor: '#53A8BB'}}></div>
          <div style={{zIndex: '100'}}>
            <img src={netImg} alt="" />
          </div>
          <div>
            <div>
              <h4 style={{color: '#53A8BB',fontSize: '24px',fontWeight: '600',marginBottom: '30px'}}>Чем мы отличаемся:</h4>
            </div>
            <div>
              <ol style={{color: '#000000',fontSize: '20px',fontWeight: '400',}}>
                <li style={{marginBottom: '15px'}}>Индивидуальный подход к каждому <br /> пациенту</li>
                <li style={{marginBottom: '15px'}}>Профессионализм сотрудников клиник <br /> — от врачей до администраторов</li>
                <li style={{marginBottom: '15px'}}>Передовые технологии и материалы, <br /> используемые в работе</li>
                <li style={{marginBottom: '15px'}}>Эффективные методы обезболивания и <br /> надежные средства дезинфекции</li>
                <li style={{marginBottom: '15px'}}>Гибкая ценовая политика</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NetWork;
