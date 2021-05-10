import React, { useContext } from "react";
import Loading from "../Component/Loading/Loading"
import ContextError from "../Provider/context";

const Table = () => {
  const { logs, setLogId, isFetching } = useContext(ContextError);

  const handleIdClick = ({target}) => {
    window.location.href=`/logs/details/${target.innerText}`
    setLogId(target.innerText)
  }

  return (
    isFetching ? <Loading /> :
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
