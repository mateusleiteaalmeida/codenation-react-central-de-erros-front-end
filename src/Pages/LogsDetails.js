import React from "react";
import Header from "../Component/Header";
import "../App.css";
import LogDetails from "../Component/LogsDetails";

const LogsDetailsPage = () => {

  return (
    <div className="container-fluid">
      <Header />
      <h1>Página de detalhes do Log</h1>
      <LogDetails />
    </div>
  );
};

export default LogsDetailsPage;
