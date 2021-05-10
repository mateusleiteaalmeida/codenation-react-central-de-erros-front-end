import React, { useContext, useEffect } from "react";
import ContextError from "../Provider/context";

const LogDetails = () => {
  const {
    getLogById, logId, logDetails, setLogId
  } = useContext(ContextError);
  
  useEffect(() => {
    const url = window.location.href
    const idDetail = url.slice(35);
    setLogId(idDetail)
    getLogById();
  }, [logId])

    return (
      <div>
        <table>
        { logDetails && Object.entries(logDetails).map((element) => <tr key={element}>{element}</tr>) }
        </table>
         <button type="button" onClick={ () => { window.location.href="/logs"} }>
          Retonar
        </button>
      </div>
    );
  }
  
  
  export default LogDetails;