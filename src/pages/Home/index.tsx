import screenBackground from "../../assets/background.png";
import play from "../../assets/play.png";
import save from "../../assets/save.png";
import download from "../../assets/download.png";
import share from "../../assets/share.png";
import like from "../../assets/like.png";
import user from "../../assets/user.png";
import search from "../../assets/search.png";
import arrow from "../../assets/ArrowDown.png";
import bell from "../../assets/bell.png";

import Button from "../../components/Button";
//import "../../Reset.css";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <h1 className="logo">
            <span className="logo-icon">SS</span>
            SaintStream
          </h1>
        </div>

        <div className="headerNav">
          <Button text="Home" className="buttonNav" />
          <Button text="Discover" className="buttonNav" />
          <Button text="Movie Release" className="buttonNav" />
          <Button text="Forum" className="buttonNav" />
          <Button text="About" className="buttonNav" />
        </div>

        <div className="headerControls">
          <img src={search} alt="Search" className="searchIcon" />
          <input type="text" className="search" placeholder="Search" />
          <Button
            text=""
            icon="notification-icon"
            className="buttonNotification"
          />
          <div className="headerUser">
            <img src={user} alt="User" className="userAvatar" />
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
