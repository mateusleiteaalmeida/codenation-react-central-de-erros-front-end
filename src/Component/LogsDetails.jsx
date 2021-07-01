import React, { useContext, useEffect } from "react";
import Loading from "../Component/Loading/Loading"
import ContextError from "../Provider/context";

const LogDetails = () => {
  const {
    getLogById, logDetails, isFetching
  } = useContext(ContextError);
  
  useEffect(() => {
    const url = window.location.href
    const idDetail = url.slice(35);
    getLogById(idDetail);
  }, [])

    return (
    isFetching ? <Loading /> :
    <div className="table ">
        <div className="container-int">
          <h3>Detalhes</h3>
          <hr />
          <button type="button" className="btn btn-outline-info"># {logDetails.id}</button>
          <hr />
          Log: {logDetails.log}
          <hr />
          Level: {logDetails.level}
          <hr />
          Origin: {logDetails.origin}
          <hr/>
          Date: {logDetails.date}
          <hr/>
          Description: {logDetails.description}
          <hr/>
        </div>
         <button 
         type="button" 
         className="btn btn-primary button"
         onClick={ () => { window.location.href="/logs"} }>
          Retornar
        </button>
      </div>
    );
  }
  
  
  export default LogDetails;