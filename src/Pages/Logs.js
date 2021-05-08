import React, { useEffect } from 'react';
import Header from '../Component/Header';
import '../App.css';

const LogsPage = () => {

  const getLogs = () => {
    var myHeaders = new Headers();
    const token = localStorage.getItem('token');
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/logs", requestOptions)
    .then(response => {
      if (response.status === 404) throw new Error ('Logs não encontrados.');
      return response.json()
    })
    .then(result => {
      console.log(result.content)
      return result;
    })
    .catch(error => alert(error.message));
    }

  useEffect(() => {
    getLogs();
  })

  return(
    <div className="container-fluid">
        <Header />
        <div className="container-md">
            <h1>Página de Logs</h1>
        </div>
    </div>
    );
}

export default LogsPage;