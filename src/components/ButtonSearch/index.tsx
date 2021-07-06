import "./styles.css";

const ButtonSearch = () => {
  return (
    <div className="search-container">
      <div className="base-card search-card">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Digite sua busca aqui"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonSearch;
