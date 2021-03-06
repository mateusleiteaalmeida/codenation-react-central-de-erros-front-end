import React, { useState } from 'react';
import ContextError from './context';

const ProviderError = ({children}) => {
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
  const [logs, setLogs] = useState(defaultValue);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortQuery, setSortQuery] = useState('');
  const [pageSize, setPageSize] = useState(4);
  const [filterQuery, setFilterQuery] = useState('');
  const [logDetails, setLogDetails] = useState('');

  
  const getLogin = (login) => {
    setEmail(login);
  }
  const getPass = (pass) => {
    setPass(pass);
  }


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
        if (response.status === 400) throw new Error ('Usuário ou senha incorretos.');
        return response.json()
      })
      .then(result => {
        localStorage.setItem('token', result.access_token);
        window.location.href = '/logs';
      })
      .catch(error => alert(error.message));
  }

  const getLogs = () => {
    var myHeaders = new Headers();
    const token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`${url}/logs/${filterQuery}?pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortQuery}`, requestOptions)
      .then((response) => {
        if (response.status === 404) throw new Error("Logs não encontrados.");
        return response.json();
      })
      .then((result) => {
        if (result.numberOfElements === 0) throw new Error("Logs não encontrados.");
        setIsFetching(false);
        setLogs(result);
      })
      .catch((error) => alert(error.message));
  };

  const getLogById = (id) => {
    var myHeaders = new Headers();
    const token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${url}/logs/id/${id}`, requestOptions)
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
