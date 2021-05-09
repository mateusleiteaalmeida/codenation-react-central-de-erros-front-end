import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import ContextError from './context';
import axios from 'axios';

const ProviderError = ({children}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userReturn, setUserReturn] = useState('');

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
    
   fetch("https://squad-4-central-de-erros.herokuapp.com/oauth/token", requestOptions)
      .then(response => {
        console.log('entrou aqui também')
        if (response.status === 401) throw new Error ('Usuário ou senha incorretos.');
        return response.json()
      })
      .then(result => {
        console.log('entrou também 2')
        localStorage.setItem('token', result.access_token);
        window.location.href = '/logs';
      })
      .catch(error => alert(error.message));
  }

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
  }

  return(
      <ContextError.Provider value={context}>
          {children}
      </ContextError.Provider>
  );
};

export default ProviderError;
