import React, { useContext } from "react";
import ContextError from "../Provider/context";

const Filter = () => {
  const {
    setSortQuery
  } = useContext(ContextError);

  return (
    <div>
      <form className="form">
      <div className="coluna">
          <div className="form-label" htmlFor="error-type">
            Ordenar por:
            <select id="log-type" onChange={({target}) => setSortQuery(target.value)} className="form-select">
              <option value="id">Id</option>
              <option value="origin">Origem</option>
              <option value="description">Descrição</option>
              <option value="date">Data</option>
            </select>
          </div>
        </div>
        <div className="coluna">
          <div className="form-label" htmlFor="error-type">
            Level:
            <select id="error-type" className="form-select">
              <option value=""> </option>
              <option value="warning">Warning</option>
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
          <label htmlFor="origem">
          Origem
            <input type="radio" name="select" id="origem" />
           
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="quantidade">
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
        <button className="btn btn-success button">Filtrar</button>
      </form>
    </div>
  );
};

export default Filter;
