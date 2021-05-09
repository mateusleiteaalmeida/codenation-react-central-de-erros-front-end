import React, { useEffect } from "react";
import Header from "../Component/Header";
import Filter from "../Component/Filter";
import Table from '../Component/Table';
import "../App.css";

const LogsPage = () => {

  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <Filter />
        <Table />
      </div>

    </div>
  );
};

export default LogsPage;
