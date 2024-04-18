import React from "react";
import "./It.scss";
import artIcon1 from "../../../assets/artIcon1.svg";
import artIcon2 from "../../../assets/artIcon2.svg";
import artIcon3 from "../../../assets/artIcon3.svg";

const cardsData = [
  {
    image: artIcon1,
    title: "ПОСТОЯННОЕ",
    title2: ' РАЗВИТИЕ',
    description:
      "Наши врачи регулярно выезжают за границу на семинары и мастер-классы ведущих специалистов стран СНГ и Европы. Говорят, совершенства не существует, но мы однозначно к нему стремимся!",
  },
  {
    image: artIcon2,
    title: "СОВРЕМЕННЫЕ",
    title2: 'МЕТОДИКИ ЛЕЧЕНИЯ',
    description:
      "Инновационные технологии гарантируют, что лечебный процесс будет максимально комфортным и безопасным. Какие-либо побочные эффекты здесь полностью отсутствуют.",
  },
  {
    image: artIcon3,
    title: "ГАРАНТИЯ",
    title2: 'КАЧЕСТВА',
    description:
      "Главная задача нашей команды – обеспечить качество лечения, чтобы вы были довольны результатами нашей работы. Вы получаете гарантию на любую услугу в Safe.Clinic .",
  },
];

const It = () => {
  return (
    <div className="container">
      <article>
        <div>
          <div>
            <hr style={{ width: "35%" }} />
          </div>
          <p
            style={{
              fontSize: "70px",
              marginTop: "-61.5px",
              marginLeft: "-10px",
            }}
          >
            .
          </p>
          <div>
            <center
              style={{ color: "#53a8bb", fontSize: "32px", marginTop: "-45px" }}
            >
              safe.clinic это
            </center>
          </div>
          <span>
            <hr
              style={{ marginLeft: "64%", marginTop: "-15px", width: "36%" }}
            />
          </span>
          <p
            style={{
              fontSize: "70px",
              marginLeft: "99.1%",
              marginTop: "-61.7px",
            }}
          >
            .
          </p>
        </div>
        <div className='article-cards'>
          {cardsData.map((q) => {
            return (
              <div className="seac2__card">
                <div className="seac2__cards_img"><img src={q.image} alt="" /></div>
                <h3>{q.title} <br /> {q.title2}</h3>
                <p>{q.description}</p>
              </div>
            )
          })}
        </div>
      </article>
    </div>
  );
};

export default It;
