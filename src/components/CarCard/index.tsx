import "./styles.css";
import CarCardImg from "assets/images/car-card1.png";

const CarCard = () => {
  return (
    <div className="car-container">
      <div className="base-card car-card">
        <div className="card-card-top">
          <img src={CarCardImg} alt="Carro" />
        </div>
        <div className="car-card-bottom">
          <h1>Audi Supra TT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
