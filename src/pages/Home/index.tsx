import screenBackground from "../../assets/background.png";
import play from "../../assets/play.png";
import save from "../../assets/save.png";
import download from "../../assets/download.png";
import share from "../../assets/share.png";
import like from "../../assets/like.png";
import pedroPascal from "../../assets/pedropascal.png";
import bellaRamsey from "../../assets/ellie.png";
import annaTorv from "../../assets/tessa.png";
import ashleyJohnson from "../../assets/elliemother.png";
import nickOfferman from "../../assets/billie.png";
import nicoParker from "../../assets/sarahmiller.png";
import murrayBartlett from "../../assets/frank.png";

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
      <div className="storyLine">
        <h1>Enredo</h1>
        <p>
          The Last of Us é uma série de televisão americana de drama
          pós-apocalíptico criada por Craig Mazin e Neil Druckmann para a HBO.
          Baseada no videogame de 2013 desenvolvido pela Naughty Dog, a série se
          passa em 2023, vinte anos após o início de uma pandemia causada por
          uma infecção fúngica em massa, que transforma seus hospedeiros em
          criaturas semelhantes a zumbis e causa o colapso da sociedade. A série
          acompanha Joel (Pedro Pascal), um contrabandista encarregado de
          escoltar a adolescente imune Ellie (Bella Ramsey) pelos Estados Unidos
          pós-apocalípticos.....
          <button className="more">More</button>
        </p>
      </div>
      <div className="topCast">
        <h1 className="topCastTitle">Elenco Principal</h1>
        <div className="actors">
          <div className="actorsImage">
            <img src={pedroPascal} alt="image for actor Pedro Pascal" />
          </div>
          <div className="actorsName">
            <h1>Pedro Pascal</h1>
            <p>Joel Miller</p>
          </div>
          <div className="actorsImage">
            <img src={bellaRamsey} alt="image for actor Bella Ramsey" />
          </div>
          <div className="actorsName">
            <h1>Bella Ramsey</h1>
            <p>Ellie</p>
          </div>
          <div className="actorsImage">
            <img src={annaTorv} alt="image for actor Anna Torv" />
          </div>
          <div className="actorsName">
            <h1>Anna Torv</h1>
            <p>Tessa</p>
          </div>
          <div className="actorsImage">
            <img src={ashleyJohnson} alt="image for actor Ashley Johnson" />
          </div>
          <div className="actorsName">
            <h1>Ashley Johnson</h1>
            <p>Ellie Mother</p>
          </div>
          <div className="actorsImage">
            <img src={nickOfferman} alt="image for actor Nick Offerman" />
          </div>
          <div className="actorsName">
            <h1>Nick Offerman</h1>
            <p>Bill</p>
          </div>
          <div className="actorsImage">
            <img src={nicoParker} alt="image for actor Nico Parker" />
          </div>
          <div className="actorsName">
            <h1>Nico Parker</h1>
            <p>Sarah Miller</p>
          </div>
          <div className="actorsImage">
            <img src={murrayBartlett} alt="image for actor Murray Bartlett" />
          </div>
          <div className="actorsName">
            <h1>Murray Bartlett</h1>
            <p>Frank</p>
          </div>
        </div>
      </div>
      <div className="midfieldMenu">
        <nav className="midfieldNav">
          <Button text="Episode" className="buttonNavMidfield" />
          <Button text="Universe" className="buttonNavMidfield" />
          <Button text="News" className="buttonNavMidfield" />
          <Button text="Reviews" className="buttonNavMidfield" />
        </nav>
      </div>
    </>
  );
}
