import React from 'react';
import Navbar from './Components/Navbar/index';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About'
import Card from './Components/Card'
import Confidentiality from './Components/Confidentiality'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Footer from './Components/Footer/index'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={About} />
        <Route path='/products' component={Card} />
        <Route path='/contact-us' component={Confidentiality} />
        <Route path='/sign-up' component={Contact} />
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
