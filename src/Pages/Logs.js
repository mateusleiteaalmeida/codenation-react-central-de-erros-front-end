import React from "react";
import Header from "../Component/Header";
import Filter from "../Component/Filter";
import Table from '../Component/Table';
import PageBar from '../Component/PageBar';
import "../App.css";

const LogsPage = () => {

  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <Filter />
        <Table />
        <PageBar />
      </div>

    </div>
  );
};

export default LogsPage;
