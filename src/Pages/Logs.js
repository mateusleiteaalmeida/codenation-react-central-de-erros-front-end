import React, { useEffect } from 'react';
import Header from '../Component/Header';
import '../App.css';
import Filter from '../Component/Filter';

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

    fetch("https://squad-4-central-de-erros.herokuapp.com/logs", requestOptions)
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
    console.log(getLogs());
    getLogs();
  })

  return(
    <div className="container-fluid">
          <Header />
        <div className="container">
          <Filter />

        </div>
    </div>
    );
}

export default LogsPage;