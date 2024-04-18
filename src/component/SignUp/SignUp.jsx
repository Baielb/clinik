import React, { useState } from "react";
import "./SignUp.scss";
import { IoCloseOutline } from "react-icons/io5";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Transition } from "react-transition-group";
import SignUpCall from "../SignUpCall/SignUpCall";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const SignUp = ({ isOpen, onClose }) => {
  const [secondaryModalOpen, setSecondaryModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const openSecondaryModal = () => setSecondaryModalOpen(true);
  const closeSecondaryModal = () => setSecondaryModalOpen(false);

  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
      setNameError(false);
    } else if (name === "phone") {
      setPhone(value);
      setPhoneError(false);
    }
  };

  const handleSendButtonClick = () => {
    if (name.trim() === "") {
      setNameError(true);
    }
    if (phone.trim() === "") {
      setPhoneError(true);
    }

    if (name.trim() !== "" && phone.trim() !== "") {
      openSecondaryModal();
      onClose();
    }
  };

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
              <div className="modal-content">
                <button
                  style={{ cursor: "pointer" }}
                  className="modal-close-button"
                  onClick={() => onClose()}
                >
                  <IoCloseOutline style={{ width: "26px", height: "26px" }} />
                </button>
                <div className="modal-text">
                  <h2>ХОТИТЕ ЗАПИСАТЬСЯ НА ПРИЕМ?</h2>
                  <p>
                    ОСТАВЬТЕ СВОИ КОНТАКТЫ И НАШ МЕНЕДЖЕР <br /> СВЯЖЕТСЯ С
                    ВАМИ.
                  </p>
                </div>
                <div className="inputs">
                  <TextField
                    sx={{
                      width: "453px",
                      mb: "30px",
                      height: "59px",
                      fontSize: "14.21px",
                      fontWeight: "500",
                      color: "#0000004D",
                      borderRadius: nameError? '6px' : '',
                      border: nameError ? "1px solid red" : "",
                      height: nameError ? '58px' : ''
                    }}
                    id="outlined-basic"
                    label="Ваше имя"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                  <div>
                    <FormControl sx={{ width: 100, ml: "0" }}>
                      <InputLabel id="demo-simple-select-label">+7</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="+7"
                        sx={{
                          border: phoneError ? '1px solid red' : '',
                        }}
                      >
                        <MenuItem value={"+7"}>+7</MenuItem>
                        <MenuItem value={"+996"}>+996</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      sx={{
                        mr: "0",
                        width: "355px",
                        border: phoneError ? "1px solid red" : "",
                        borderRadius: phoneError ? '6px' : ''
                      }}
                      id="outlined-basic"
                      placeholder="(999) 999 999"
                      variant="outlined"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                    />
                    <Button
                      sx={{
                        width: "453px",
                        height: "53px",
                        marginTop: "55px",
                        backgroundColor: "#53A8BB",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "21px",
                        marginBottom: "71px",
                      }}
                      variant="contained"
                      onClick={handleSendButtonClick}
                    >
                      Отправить
                    </Button>
                    <Div
                      sx={{
                        color: "#000",
                        textAlign: "center",
                        mr: "90px",
                        mb: "64px",
                      }}
                    >
                      {
                        "Оставляя свои данные на сайте, Вы соглашаетесь на обработку персональных данных"
                      }
                    </Div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
      {secondaryModalOpen && <SignUpCall onClose={closeSecondaryModal} />}
    </>
  );
};

export default SignUp;
