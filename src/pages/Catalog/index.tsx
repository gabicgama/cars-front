import ButtonSearch from "components/ButtonSearch";
import CarCard from "components/CarCard";

const Catalog = () => {
  return (
    <>
      <ButtonSearch />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
