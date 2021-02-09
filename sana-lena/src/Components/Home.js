import React from 'react';
import Shopp from './Assets/shopp.png'
import Soldes from './Assets/soldes.jpg'


const  Home = () => {
  return (
    <div className="home">  
      <img src={Soldes} width="20%"/>
      <img src={Shopp} width="50%"/>
    </div>
  );
}

export default Home;