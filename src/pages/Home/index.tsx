import screenBackground from "../../assets/background.png";
import play from "../../assets/play.png";
import save from "../../assets/save.png";
import download from "../../assets/download.png";
import share from "../../assets/share.png";
import like from "../../assets/like.png";

import Button from "../../components/Button";
import "../../Reset.css";
import "./styles.css";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
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
