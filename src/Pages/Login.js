import React from 'react';
import Login from '../Component/Login';
import Header from '../Component/Header';
import '../App.css';

const LoginPage = () => {
  return(
    <div className="container-fluid">
        <Header />
        <div className="container-md">
            <Login />
        </div>
    </div>
    );
}

export default LoginPage;