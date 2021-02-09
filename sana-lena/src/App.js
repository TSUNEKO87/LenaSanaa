import React from 'react';
import Navbar from './Components/Navbar/index';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './Components/Paiement/Card'
import Confidentiality from './Components/About/Confidentiality'
import Contact from './Components/About/Contact'
import Home from './Components/Home'
import DetailsProduct from './Components/Products/DetailsProduct/DetailsProduct'
import Footer from './Components/Footer/index'
import Paiement from './Components/Paiement/Paiement'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={DetailsProduct} />
          <Route path='/contact-us' component={Confidentiality} />
          <Route path='/sign-up' component={Contact} />
          <Route path='/card' component={Card} />
          <Route path='/paiment' component={Paiement} />
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
