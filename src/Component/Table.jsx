import React, { useContext, useEffect } from "react";
import ContextError from "../Provider/context";
const Table = () => {
  const { logs, getLogById, logId, setLogId } = useContext(ContextError);

  const handleIdClick = ({target}) => {
    window.location.href=`/logs/details/${target.innerText}`
    setLogId(target.innerText)
  }

  return (
    <div className="table ">
      <table className="overall-width">
        <tr>
          <th>Id</th>
          <th>Level</th>
          <th>Origem</th>
          <th>Data</th>
          <th>Descrição</th>
        </tr>
        <tbody>
          {logs.content.map((logs) => (
            <tr key={logs.id} className={`table-${logs.level.toLowerCase()}`}>
              <td><button type="button" onClick={ handleIdClick }>{logs.id}</button></td>
              <td>{logs.level}</td>
              <td>{logs.origin}</td>
              <td>{logs.date}</td>
              <td>{logs.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
