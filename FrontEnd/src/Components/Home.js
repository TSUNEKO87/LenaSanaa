import React from 'react';
import Shopp from './Assets/shopp.png'
import Soldes from './Assets/soldes.jpg'


const  Home = () => {
  return (
    <div className="home">  
      <div> 
        <img src={Soldes} width="100%" />
      </div>
      <div> 
        <img src={Shopp} width="100%"  />
      </div>
    </div>
  );
}

export default Home;