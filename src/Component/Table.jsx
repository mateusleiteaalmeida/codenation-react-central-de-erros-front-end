import React, { useContext, useEffect } from "react";
import Loading from "../Component/Loading/Loading"
import ContextError from "../Provider/context";

const Table = () => {
  const { logs, setLogId, isFetching, getLogs, pageNumber, sortQuery, pageSize, filterQuery } = useContext(ContextError);

  useEffect(() => {
    getLogs();
  }, [filterQuery, pageNumber, pageSize, sortQuery]);

  const handleIdClick = ({target}) => {
    window.location.href=`/logs/details/${target.innerText}`
    setLogId(target.innerText)
  }

  return (
    isFetching ? <Loading /> :
    <div className="table">
      <table className="overall-width">
        <tbody>
        <tr>
          <th>Id</th>
          <th>Level</th>
          <th>Origem</th>
          <th>Data</th>
          <th>Descrição</th>
        </tr>
          {logs ? logs.content.map((logs) => (
            <tr key={logs.id} className={`table-${logs.level.toLowerCase()}`}>
              <td><button 
              type="button" 
              onClick={ handleIdClick }
              className="btn btn-primary button"
              >
                {logs.id}
                </button>
                </td>
              <td>{logs.level}</td>
              <td>{logs.origin}</td>
              <td>{logs.date}</td>
              <td>{logs.description}</td>
            </tr>
          )) : <h1>Logs nao encontrados</h1>}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
