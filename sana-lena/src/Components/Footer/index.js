import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Mastercard from '../Assets/Mastercard.png'
import Paypal from '../Assets/Paypal.jpg'
import Visa from '../Assets/Visa.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";




const Footer = () => {
  return (
    <div className="footer">
        <ul>
        <Link to="/apropos">
            <li> A propos </li>
        </Link>
        <Link to="/confidentiality">
            <li> Politique de confidentialité  </li>
        </Link>
        <Link to="/contact-us">
                <li> Contact </li>
        </Link>
        </ul>
        <div>
          <img src={Mastercard} width="50px" />
          <img src={Paypal} width="50px"/>
          <img src={Visa} width="50px"/>
        </div>
        <h4> Sena&Lena.be </h4>
        <div className="icons">
          <FaFacebook size={50} />
          <AiFillInstagram size={50} />
          <SiGmail size={50} />
        </div>
    </div>
  );
     
}


export default Footer;