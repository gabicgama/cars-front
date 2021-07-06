import "./styles.css";
import CarHeader from "assets/images/car-header1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top-container">
        <div className="base-card home-car-card">
          <div className="home-main-image">
            <img src={CarHeader} alt="Carro" />
          </div>
          <div className="home-content">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
      <div className="home-botton-container">
        <div className="base-card home-catalog-card">
          <div className="custom-button">
            <button className="btn btn-primary">
              <Link to="/products">Ver catálogo</Link>
            </button>
          </div>
          <div className="home-catalog-card-content">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
