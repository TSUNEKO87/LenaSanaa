import React,  {useState} from "react"
import "./styles.css"
import {Link} from "react-router-dom"
import { TiThMenu } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../Assets/Logo.png"



export default function Navbar() {
  const [open ,setOpen ] = useState(false)
  return (
    <div>
      <nav>
      <Link to="/">
        <div className="logo"> <img src={Logo} width="20%" /> </div>
      </Link>
        <ul className="nav-links" style= {{transform : open ? "translateX(0px)" : ""}}>
        <Link to="/">
          <li> <a> Acceuil </a> </li>
        </Link>
        <Link to="/products">
          <li> <a> Produits </a> </li>
        </Link>
        <Link to="/contact-us">
          <li> <a> Contact </a> </li>
        </Link>
        </ul>
        <div className="icons">
        <Link to="/">
          <BsSearch size={25} />
        </Link>
        <Link to="/card">
         <AiOutlineShoppingCart size={25} />
        </Link>
        <Link to="/">
          <CgProfile size={25}/>
        </Link>
        </div>
        <TiThMenu className="burger" onClick= {() => setOpen(!open)} />
      </nav>
    </div>
  )
}















