import React from "react";
import Header from "../Component/Header";
import "../App.css";
import LogDetails from "../Component/LogsDetails";

const LogsDetailsPage = () => {

  return (
    <div className="container-fluid">
        <Header />    
      <div className="container">
        <LogDetails />
      </div>  
      
    </div>
  );
};

export default LogsDetailsPage;
