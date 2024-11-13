import screenBackground from "../../assets/background.png";
import play from "../../assets/play.png";
import Button from "../../components/Button";
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
          {/* <button className="buttonActionMovie">
            <img src={play} alt="" height={30} width={30} />
            Ver Trailer
          </button> */}
          <Button icon={play} text="Ver Trailer" className="buttonActionMovie" />
          <Button text="Adicionar na minha lista" className="buttonListMovie" variant="secondary" />
          <Button text="Adicionar na minha lista" className="buttonListMovie" variant="danger" />
        </div>
      </div>
    </>
  );
}
