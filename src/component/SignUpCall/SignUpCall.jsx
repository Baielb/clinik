import React from "react";
import "./SignUpCall.scss";
import tish from "../../assets/tish.svg";

const SignUpCall = ({ onClose }) => {
  const handleGoToMain = () => {
    onClose();
  };

  return (
    <>
      <div className="second-modal">
        <div className="second-modal-wrapper">
          <div className="second-modal-content">
            <div className="second-modal-img">
              <img src={tish} alt="" />
            </div>
            <div className="second-modal-text">
              <h3>
                ОСТАВАЙТЕСЬ С НАМИ НАШИ МЕНЕДЖЕРЫ <br /> СВЯЖУТСЯ С ВАМИ.
              </h3>
              <button onClick={handleGoToMain}>ПЕРЕЙТИ НА ГЛАВНУЮ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpCall;
