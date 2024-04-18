import React from "react";
import "./Header2.scss";
import { BsGeoAlt } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Header2 = () => {
  return (
    <div className="container">
      <div className="head2">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <BsGeoAlt
              style={{ width: "32px", height: "32px", color: "#53A8BB" }}
            />
          </div>
          <h4>г. Бишкек</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <CiClock2
              style={{ width: "32px", height: "32px", color: "#53A8BB" }}
            />
          </div>
          <h4>
            Ежедневно : Пн - Пт с 08:30 до 18:30 <br /> Сб с 09:00 до 15:00 Вс-
            выходной
          </h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <IoCallOutline
              style={{ width: "32px", height: "32px", color: "#53A8BB" }}
            />
          </div>
          <h4>+ 996 (704) 678 485</h4>
        </div>
      </div>
    </div>
  );
};

export default Header2;
