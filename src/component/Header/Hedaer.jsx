import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { FaHouseMedical } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";
import headLogo from "../../assets/head-logo.svg";
import SignUp from "../SignUp/SignUp";
import "./Header.scss";
import { VscMenu } from "react-icons/vsc";

const Hedaer = () => {
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="head">
      <div style={{ position: "relative" }} className="head-vertical">
        <div style={{ padding: "37px 0" }}>
          <Link to={"/"}>
            <img src={headLogo} alt="" />
          </Link>
        </div>
        <div className="head-center">
          <div className="headd">
            <Link className="head-hover" to={"/about"}>
              <FaHouseMedical style={{ width: "32px", height: "32px" }} />
              <p className="link-text">О клинике</p>
            </Link>
          </div>
          <div className="headd">
            <Link className="head-hover" to={"/service"}>
              <MdMiscellaneousServices
                style={{ width: "32px", height: "32px" }}
              />
              <p className="link-text">Наши Услуги</p>
            </Link>
          </div>
          <div className="headd">
            <Link className="head-hover" to={"/contact"}>
              <IoPeople style={{ width: "32px", height: "32px" }} />
              <p className="link-text">Контакты</p>
            </Link>
          </div>
        </div>
        <div className="burder-df">
          <div>
            <button onClick={() => setOpen(true)} className="head-btn">
              Записаться на прием{" "}
            </button>
            <SignUp isOpen={open} onClose={() => setOpen(false)} />
          </div>
          <VscMenu
            className="burgerMenu"
            key="burger-menu"
            onClick={toggleDrawer("right", true)}
          />
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Hedaer;
