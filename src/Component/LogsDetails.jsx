import React, { useContext, useEffect } from "react";
import ContextError from "../Provider/context";

const LogDetails = () => {
  const {
    getLogById, logId, logDetails, setLogDetails
  } = useContext(ContextError);
  
  useEffect(() => {
    console.log(logId)
    getLogById();
  }, [logId])

    return (
      <div>
        <table>
        { logDetails && Object.entries(logDetails).map((element) => <tr key={element}>{element}</tr>) }
        </table>
{/*          <button onClick={window.location.href="/logs"}>
          Retonar
        </button> */}
      </div>
    );
  }
  
  
  export default LogDetails;