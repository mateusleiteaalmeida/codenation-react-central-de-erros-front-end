import React, { useContext, useEffect } from "react";
import ContextError from "../Provider/context";
const Table = () => {
  const { getLogs, logs } = useContext(ContextError);

  useEffect(() => {
    getLogs();
  },[]);

  return (
    <div className="table ">
      <table className="overall-width">
        <tr>
          <th>id</th>
          <th>data</th>
          <th>origem</th>
          <th>Level</th>
          <th>descrição</th>
        </tr>
        <tbody>
          {logs.content.map((logs) => (
            <tr key={logs.id} className={`table-${logs.level.toLowerCase()}`}>
              <td>{logs.id}</td>
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
