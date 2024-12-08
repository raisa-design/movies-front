import React, { useState } from "react";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  SwitchCamera,
  Menu,
} from "lucide-react";
import Button from "../Button";
import arrow from "../../assets/ArrowDown.png";
import "./styles.css";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { text: "Home" },
    { text: "Discover" },
    { text: "Movie Release" },
    { text: "Forum" },
    { text: "About" },
  ];

  const menuItems = [
    { icon: <User size={20} />, text: "Gerenciar Perfis", action: () => {} },
    {
      icon: <SwitchCamera size={20} />,
      text: "Transferir Perfil",
      action: () => {},
    },
    { icon: <Settings size={20} />, text: "Conta", action: () => {} },
    {
      icon: <HelpCircle size={20} />,
      text: "Central de Ajuda",
      action: () => {},
    },
    { icon: <LogOut size={20} />, text: "Sair", action: () => {} },
  ];

  return (
    <div className="profile-dropdown-container">
      <button className="profile-dropdown-toggle" onClick={toggleDropdown}>
        <Menu className="menu-icon" />
        <img src={arrow} alt="Dropdown" className="dropdown-icon" />
      </button>

      {isOpen && (
        <div className="profile-dropdown-menu">
          <div className="mobile-nav">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                text={item.text}
                className="buttonNav mobile"
              />
            ))}
          </div>
          <div className="dropdown-divider"></div>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="profile-dropdown-item"
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
