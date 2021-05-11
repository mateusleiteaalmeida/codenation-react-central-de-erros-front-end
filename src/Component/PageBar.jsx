import React, { useContext } from "react";
import ContextError from "../Provider/context";

const PageBar = () => {
  const {
    pageNumber,
    setPageNumber,
    setPageSize
  } = useContext(ContextError);

  const nextPage = () => {
    if (pageNumber === 3) return pageNumber;
    setPageNumber(pageNumber + 1);
  }

  const previousPage = () => {
    if (pageNumber === 0) return pageNumber;
    setPageNumber(pageNumber - 1);
  }

  return (
    <div>
      <label htmlFor="logs-page-limit" className="pagebarLabel">
      Limite de logs por página:
        <input
          name="logs-page-limit"
          className="pagebarLabel-input"
          type="number"
          id="logs-page-limit"
          onChange={({target}) => setPageSize(target.value)}
          min="1"
          max="10"
        >
        </input>
      </label>
      <button 
      className="btn btn-primary button"
      onClick={ previousPage }
      //  disabled={pageNumber === 0}
      >
        Anterior
      </button>
      { `Página ${pageNumber + 1}` }
      <button
      className="btn btn-primary button"
      onClick={ nextPage }
      //  disabled={pageNumber === 3}
      >
        Seguinte
      </button>
    </div>
  );
};

export default PageBar;