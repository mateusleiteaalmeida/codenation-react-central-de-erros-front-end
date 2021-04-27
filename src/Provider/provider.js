import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import ContextError from './context';

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
    const isRegister = () => {
      history.push('/register');
    }

    const isLogin = async () => {

      const myHeaders = new Headers();
     const dataRequest =  {
       method: 'POST',
       headers: myHeaders,
       mode: 'cors',
       cache: 'default'
     }
     const myRequest = new Request('', dataRequest)
     const response = fetch(myRequest)
       .then((response) => response.blob())
   
       if(response.contain('promise')){
         return <Redirect to="/interface"/>
       } else {
         setUserReturn('Erro ao logar');
       }
   
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