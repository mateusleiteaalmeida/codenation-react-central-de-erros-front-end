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
      {/* <h2>Detalhes</h2>
      <table className="overall-width">
        <tr>
          <th>Id</th>
          <th>Log</th>
          <th>Level</th>
          <th>Origem</th>
          <th>Data</th>
          <th>Descrição</th>
        </tr>
        <tbody>
        { logDetails && 
        <tr>
          <td>{logDetails.id}</td>
          <td>{logDetails.log}</td>
          <td>{logDetails.level}</td>
          <td>{logDetails.origin}</td>
          <td>{logDetails.date}</td>
          <td>{logDetails.description}</td>
        </tr>
        }
       
        </tbody>
        </table> */}
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
          Retonar
        </button>
      </div>
    );
  }
  
  
  export default LogDetails;