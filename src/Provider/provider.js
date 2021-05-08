import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
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
    const history = useHistory();
    const isRegister = () => history.push('/register');

    const isLogin = async (event) => {
      event.preventDefault();
      const url = 'https://squad-4-central-de-erros.herokuapp.com/oauth/token'
      const headers = {username:'authlogin', password:'authlogin123'}
      
      
      axios.post(url,headers)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      console.log('Chamou o fetch');

  
   
      //  if(response.contain('promise')){
      //    return <Redirect to="/interface"/>
      //  } else {
      //    setUserReturn('Erro ao logar');
      //  }
   
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
        isRegister
    }

    return(
        <ContextError.Provider value={context}>
            {children}
        </ContextError.Provider>
    );
};

export default ProviderError;