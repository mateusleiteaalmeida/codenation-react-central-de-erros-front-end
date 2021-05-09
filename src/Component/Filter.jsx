import React, { useState, useContext, useEffect } from "react";

const Filter = () => {
  return (
    <div>
      <form className="form">
        <div className="mb-3">
          <div className="form-label" htmlFor="error-type">
            Tipo de erro:
            <select id="error-type" className="form-select">
              <option value="Warnin"></option>
              <option value="Error"></option>
              <option value="Alert"></option>
              <option value="Bug"></option>
            </select>
          </div>
        </div>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input type="text" name="" id="" />
        <button></button>
      </form>
    </div>
  );
};

export default Filter;
