import React, { useEffect, useState } from "react";
import "./styles.css";

import Button from "../Button";

import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";
import user from "../../assets/user.png";

import { useNavigate } from "react-router-dom";
import { User, Settings, HelpCircle, LogOut, SwitchCamera } from "lucide-react";
import ProfileDropdown from "../DropDown";

const Header = () => {
  const navigate = useNavigate();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleSearchClick = () => {
    if (isMobileView) {
      navigate("/search");
    } else {
      setIsSearchExpanded(!isSearchExpanded);
    }
  };
  const profileItems = [
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
    <header className="header">
      <div className="headerLogo">
        <img src={logo} alt="" />
      </div>

      <nav className="headerNav">
        <Button text="Home" className="buttonNav" />
        <Button text="Discover" className="buttonNav" />
        <Button text="Movie Release" className="buttonNav" />
        <Button text="Forum" className="buttonNav" />
        <Button text="About" className="buttonNav" />
      </nav>

      <div className="headerControls">
        <button
          className={`searchIcon ${isSearchExpanded ? "expanded" : ""}`}
          onClick={handleSearchClick}
        >
          <img src={search} alt="Search" />
        </button>

        {!isMobileView && isSearchExpanded && (
          <input type="text" className="search" placeholder="Search" />
        )}
        <button className="bellIcon">
          <img src={bell} alt="Bell" />
        </button>
        <div className="headerUser">
          <img src={user} alt="User" className="userAvatar" />
          <ProfileDropdown items={profileItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
