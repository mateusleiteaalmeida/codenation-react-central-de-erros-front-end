import React, { useContext } from "react";
import ContextError from "../Provider/context";
const Table = () => {
  const { logs } = useContext(ContextError);

  return (
    <div className="table ">
      <table className="overall-width">
        <tr>
          <th>Id</th>
          <th>Data</th>
          <th>Origem</th>
          <th>Level</th>
          <th>Descrição</th>
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
