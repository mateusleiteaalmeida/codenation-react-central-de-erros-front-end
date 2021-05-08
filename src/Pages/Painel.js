import React from 'react';
import Header from '../Component/Header';
import Filter from '../Component/Filter';

const Painel = () => {
  return (
    <div>
        <div className="container-fluid">
        <Header />
            <div className="container">
                <Filter />
            </div>
        </div>
    </div>
  );
}

export default Painel;