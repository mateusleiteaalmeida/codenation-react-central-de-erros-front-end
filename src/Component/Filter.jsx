import React, { useContext } from "react";
import ContextError from "../Provider/context";

const Filter = () => {
  const {
    setSortQuery,
    setFilterQuery
  } = useContext(ContextError);

  const handleFilterChange = ({target}) => {
    const inputs = document.getElementsByName("filter")
    const filterInput = document.getElementsByName("filter-value")[0]
    for (const el of inputs) {
      if (el.id !== target.id) {
        if (el.type === "checkbox") el.checked = false
        if (el.type === "date") el.value = ""
        if (el.id === "level") el.value = ""
      }
      if (el.id === target.id) {
        if (el.type === "checkbox" && el.checked === true) {
          filterInput.disabled = false;
          filterInput.value = ""
        }
        if (el.type === "checkbox" && el.checked === false) {
          filterInput.disabled = true;
        }
        if (el.type === "date") {
          filterInput.disabled = true;
          filterInput.value = ""
        }
        if (el.id === "level") {
          filterInput.disabled = true;
          filterInput.value = ""
        }
      }
    }
  }

  const handleFilterButton = () => {
    let filterValue = document.getElementsByName("filter-value")[0].value
    const inputs = document.getElementsByName("filter")
    let inputText = ""
    for (const el of inputs) {
      if (el.type === "checkbox" && el.checked === true) inputText = el.id
      if (el.type === "date" && el.value !== "") {
        inputText = el.id
        filterValue = el.value
      }
      if (el.id === "level" && el.value !== "") {
        inputText = el.id
        filterValue = el.value
      }
    }
    let filterUrl = `${inputText}/${filterValue}`;
    if (filterUrl === "/") filterUrl = "";
    setFilterQuery(filterUrl);
  }

  const clearFilters = () => {
    const inputs = document.getElementsByName("filter")
    const filterValue = document.getElementsByName("filter-value")[0]
    filterValue.value = "";
    for (const el of inputs) {
        if (el.type === "checkbox") el.checked = false
        if (el.type === "date") el.value = ""
        if (el.id === "level") el.value = ""
    }
    setFilterQuery("");
  }

  return (
    <div>
      <form className="form">
      <div className="coluna">
        <label className="form-label" htmlFor="error-type">
          Ordenar por:
          <select id="log-type" onChange={({target}) => setSortQuery(target.value)} className="form-select form-control">
            <option value="id">Id</option>
            <option value="origin">Origem</option>
            <option value="description">Descrição</option>
            <option value="date">Data</option>
          </select>
        </label>
        </div>
        <div className="coluna">
          <label className="form-label" htmlFor="error-type">
            Level:
            <select name="filter" id="level" className="form-select form-control" onChange={ handleFilterChange } >
              <option value=""></option>
              <option value="WARNING">Warning</option>
              <option value="ERROR">Error</option>
              <option value="INFO">Info</option>
            </select>
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="date">
            Data:
            <input type="date" name="filter" id="date" onChange={ handleFilterChange } />
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="origem" className="form-check-label">
            <input type="checkbox" className="checkbox-filter form-control ml-3" name="filter" id="origin" onClick={ handleFilterChange } />
            Origem
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="descricao">
            <input type="checkbox" className="checkbox-filter form-control ml-3" name="filter" id="description" onClick={ handleFilterChange } />
            Descrição
          </label>
        </div>
        <div className="coluna">
          <label htmlFor="string-label" className="form-label">
            <input
              type="text"
              name="filter-value"
              id="string-label"
              className="form-control m-0"
              placeholder="Filtro"
              disabled
            />
          </label>
        </div>
        <button className="btn btn-info button" type="button" onClick={ handleFilterButton }>Filtrar</button>
        <button className="btn btn-warning button" type="button" onClick={ clearFilters }>Limpar</button>
      </form>
    </div>
  );
};

export default Filter;
