import screenBackground from "../../assets/background.png";
//import "../../Reset.css";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="mainScreen">
          <img
            src={screenBackground}
            className="screenBackground"
            alt="screenBackground"
          />
        </div>
        <div className="mainInfo">
          <h1 className="titleMovie">The Last Of Us Season 1</h1>
          <p className="descriptionMovie">
            9 Episodes • 2022 • Fantasy • Actions
          </p>
        </div>
        <div className="buttonsMain">
          <button className="buttonActionMovie">Ver Trailer</button>
          <button className="buttonListMovie">Adicionar na minha lista</button>
        </div>
      </div>
    </>
  );
}
