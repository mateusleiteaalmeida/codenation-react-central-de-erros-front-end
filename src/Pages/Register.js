import React from 'react';
import Formulario from '../Component/Register';
import Header from '../Component/Header';

const Cadastro = () => {
  return(
    <div className="container-fluid">
        <Header />
        <div className="container">
          <Formulario />
        </div>
    </div>    
  ) 
}

export default Cadastro;