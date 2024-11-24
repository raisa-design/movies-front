import screenBackground from "../../assets/background.png";
import play from "../../assets/play.png";
import save from "../../assets/save.png";
import download from "../../assets/download.png";
import share from "../../assets/share.png";
import like from "../../assets/like.png";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";

import Button from "../../components/Button";
import ProfileDropdown from "../../components/DropDown";

import { useState } from "react";

//import "../../Reset.css";
import "./styles.css";

export default function Home() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <img src={logo} alt="" />
        </div>

        <div className="headerNav">
          <Button text="Home" className="buttonNav" />
          <Button text="Discover" className="buttonNav" />
          <Button text="Movie Release" className="buttonNav" />
          <Button text="Forum" className="buttonNav" />
          <Button text="About" className="buttonNav" />
        </div>

        <div className="headerControls">
          <button
            className={`searchIcon ${isSearchExpanded ? "expanded" : ""}`}
            onClick={handleSearchClick}
          >
            <img src={search} alt="Search" />
          </button>

          {isSearchExpanded && (
            <input type="text" className="search" placeholder="Search" />
          )}
          <button className="bellIcon">
            <img src={bell} alt="Bell" />
          </button>
          <div className="headerUser">
            <img src={user} alt="User" className="userAvatar" />
            <ProfileDropdown />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="mainScreen">
          <img
            src={screenBackground}
            className="screenBackground"
            alt="screenBackground"
          />
        </div>
        <div className="mainInfoGeneral">
          <div className="mainInfo">
            <Button text="Séries" className="buttonActionCategory" />
            <h1 className="titleMovie">The Last Of Us Season 1</h1>
            <p className="descriptionMovie">
              9 Episodes • 2022 • Fantasy • Actions
            </p>
          </div>
          <div className="buttonsWrapper">
            <div className="buttonsMain">
              <Button
                icon={play}
                text="Ver Trailer"
                className="buttonActionMovie"
              />
              <Button
                icon={save}
                text="Adicionar na minha lista"
                className="buttonListMovie"
                variant="secondary"
              />
            </div>
            <div className="buttonsAlternatives">
              <Button
                icon={download}
                text="Download"
                className="buttonListMovie"
                variant="danger"
              />
              <Button
                icon={share}
                text="Share"
                className="buttonListMovie"
                variant="danger"
              />
              <Button
                icon={like}
                text="Like"
                className="buttonListMovie"
                variant="danger"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
