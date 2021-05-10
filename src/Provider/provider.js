import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import ContextError from './context';
// import axios from 'axios';

const ProviderError = ({children}) => {
//  Gambiarra para resolver proble de assincronicidade, com o tempo de montagem do componet e a req.
  const defaultValue = {
    content: [{
      id: 1,
      level: "info",
      origin: "test",
      date: "05/09/1855",
      description: "test",
    }]
  };

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userReturn, setUserReturn] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [logs, setLogs] = useState(defaultValue); // Implementação da gambiarra.
  const [pageNumber, setPageNumber] = useState(0);
  const [sortQuery, setSortQuery] = useState('');
  const [pageSize, setPageSize] = useState(4);
  const [filterQuery, setFilterQuery] = useState('');
  const [logId, setLogId] = useState(1);
  const [logDetails, setLogDetails] = useState('');

  // Use effect para chamada da api.

  const getLogin = (login) => {
    setEmail(login);
  }
  const getPass = (pass) => {
    setPass(pass);
  }
  // const history = useHistory();

  const isRegister = () => {
    window.location.href = '/register';
  }

  const url = 'https://squad-4-central-de-erros.herokuapp.com'

  const isLogin = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YXV0aExvZ2luOmF1dGhQYXNzd29yZDEyMw==");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", email);
    urlencoded.append("password", pass);
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(`${url}/oauth/token`, requestOptions)
      .then(response => {
        if (response.status === 401) throw new Error ('Usuário ou senha incorretos.');
        return response.json()
      })
      .then(result => {
        localStorage.setItem('token', result.access_token);
        window.location.href = '/logs';
      })
      .catch(error => alert(error.message));
  }

  // Captura os logs
  const getLogs = () => {
    var myHeaders = new Headers();
    const token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    console.log(`${url}/logs/${filterQuery}?pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortQuery}`)
    fetch(`${url}/logs/${filterQuery}?pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortQuery}`, requestOptions)
      .then((response) => {
        if (response.status === 404) throw new Error("Logs não encontrados.");
        return response.json();
      })
      .then((result) => {
        setIsFetching(false);
        setLogs(result);
      })
      .catch((error) => alert(error.message));
  };

  const getLogById = () => {
    var myHeaders = new Headers();
    const token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${url}/logs/id/${logId}`, requestOptions)
      .then((response) => {
        if (response.status === 404) throw new Error("Log não encontrado.");
        return response.json();
      })
      .then((result) => {
        setIsFetching(false);
        setLogDetails(result);
      })
      .catch((error) => alert(error.message));
  };

  const onRegister = () => {
    alert('Usuario cadastrado com sucesso!');
  };

  const cancel = () => {
    window.location.href = '/login';
  }

  useEffect(() => {
    getLogs()
  }, [pageNumber, sortQuery, pageSize, filterQuery]);

  const context = {
    email,
    setEmail,
    pass,
    setPass,
    setUserReturn,
    userReturn,
    getPass,
    getLogin,
    isLogin,
    isRegister,
    onRegister,
    cancel,
    logs,
    getLogs,
    pageNumber,
    setPageNumber,
    sortQuery,
    setSortQuery,
    pageSize,
    setPageSize,
    filterQuery, 
    setFilterQuery,
    logId,
    setLogId,
    getLogById,
    logDetails,
    setLogDetails,
    isFetching
  }

  return(
      <ContextError.Provider value={context}>
          {children}
      </ContextError.Provider>
  );
};

export default ProviderError;
