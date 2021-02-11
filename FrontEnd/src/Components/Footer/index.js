import Visa from "../Assets/Visa.png"
import Paypal from "../Assets/Paypal.png"
import Mastercard from "../Assets/Mastercard.png"
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import './styles.css'
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div>
            <ul className="list-unstyled">
              <li>A propos</li>
              <li>Politique de confidentialité</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="payment" >
            <img src={Visa}  width="30px"/>
            <img src={Paypal} width="30px" />
            <img src={Mastercard} width="30px" />
          </div>
          <div className="icon" >
            <IoLogoFacebook size={30} />
            <AiFillInstagram  size={30}/>
            <SiGmail size={30}/>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} www.Sena&Lena.be
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
