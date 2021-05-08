import React from 'react';
import Login from '../Component/Login';
import Header from '../Component/Header';
// import Picture from '../Component/Picture';
import '../App.css';

const Home = () => {
    return(
    <div className="container-fluid border border-danger">
        <Header />
        <div className="form-container d-flex flex-column justify-content-center view-height">
          <Login />           
        </div>
    </div>
    );
}

export default Home;