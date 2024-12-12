import React, { useState } from "react";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  SwitchCamera,
  Menu,
  Home,
  Compass,
  Film,
  MessageCircle,
  Info,
} from "lucide-react";
import arrow from "../../assets/ArrowDown.png";
import "./styles.css";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { icon: <Home size={20} />, text: "Home", action: () => {} },
    { icon: <Compass size={20} />, text: "Discover", action: () => {} },
    { icon: <Film size={20} />, text: "Movie Release", action: () => {} },
    { icon: <MessageCircle size={20} />, text: "Forum", action: () => {} },
    { icon: <Info size={20} />, text: "About", action: () => {} },
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
              <button
                key={`nav-${index}`}
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
          <div className="dropdown-divider"></div>
          {menuItems.map((item, index) => (
            <button
              key={`menu-${index}`}
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
