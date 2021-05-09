import React from "react";

const Filter = () => {

  return (
    <div>
      <form className="form">
        <div className="coluna">
          <div className="form-label" htmlFor="error-type">
            Level:
            <select id="error-type" className="form-select">
              <option value=""> </option>
              <option value="warning">warning</option>
              <option value="error">Error</option>
              <option value="info">Info</option>
            </select>
          </div>
        </div>
        <div className="coluna">
        <label htmlFor="date">
            Data:
            <input type="date" name="date" id="date" />
        </label>
        </div>
        <div className="coluna">
          <div className="form-label" htmlFor="error-type">
            <label htmlFor="log">
            log
            <input type="radio" name="select" id="log" />
          </label>
          </div>
        </div>
        <div className="coluna">
          <label htmlFor="origem">
          Origem
            <input type="radio" name="select" id="origem" />
           
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="origem">
          Quantidade
            <input type="radio" name="select" id="origem" />
            
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="string-label" className="form-label">
            <input
              type="text"
              name="desciption"
              id="string-label"
              className="form-control"
              placeholder="description"
            />
          </label>
          
        </div>
        <button className="btn btn-success button">Filtra</button>
      </form>
    </div>
  );
};

export default Filter;
